import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

    const renderMealItem = (itemData) => (
        <MealItem
            meal={itemData.item}
            onSelectMeal={() => {
                navigation.navigate('MealDetail', {
                    mealId: itemData.item.id
                })
            }}
        />
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    list: {
        width: '100%'
    }
});

export default CategoryMealsScreen;

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ meals, onSelectMeal }) => {
    const renderMealItem = (itemData) => (
        <MealItem
            meal={itemData.item}
            onSelectMeal={() => onSelectMeal(itemData.item.id)}
        />
    );

    return (
        <View style={styles.mealList}>
            <FlatList
                data={meals}
                renderItem={renderMealItem}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mealList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    list: {
        width: '100%'
    }
});

export default MealList;

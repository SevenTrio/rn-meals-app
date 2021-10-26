import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const availableMeals = useSelector((state) => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter((m) => m.categoryIds.includes(categoryId));

    const allCategories = useSelector((state) => state.categories.categories);
    const selectedCategory = allCategories.find((c) => c.id === route.params.categoryId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory.title
        });
    }, [navigation, selectedCategory]);

    const handleSelectMeal = (id) => {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    };

    if (!displayedMeals || !displayedMeals.length) {
        return (
            <View style={styles.emptyState}>
                <DefaultText>
                    No meals found, maybe check your filters?
                </DefaultText>
            </View>
        );
    }

    return <MealList meals={displayedMeals} onSelectMeal={handleSelectMeal} />;
};

const styles = StyleSheet.create({
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;

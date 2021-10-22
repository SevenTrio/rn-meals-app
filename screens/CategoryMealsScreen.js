import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

    const handleSelectMeal = (id) => {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    };

    return <MealList meals={displayedMeals} onSelectMeal={handleSelectMeal} />;
};

export default CategoryMealsScreen;

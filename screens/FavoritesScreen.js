import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
    const favMeals = MEALS.filter((m) => m.id === 'm1' || m.id === 'm2');

    const handleSelectMeal = (id) => {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    };

    return <MealList meals={favMeals} onSelectMeal={handleSelectMeal} />;
};

export default FavoritesScreen;

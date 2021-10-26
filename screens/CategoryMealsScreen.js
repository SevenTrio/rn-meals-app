import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

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

    return <MealList meals={displayedMeals} onSelectMeal={handleSelectMeal} />;
};

export default CategoryMealsScreen;

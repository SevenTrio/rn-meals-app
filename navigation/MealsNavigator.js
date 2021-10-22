import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import stackNavOptions from '../constants/stackNavOptions';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackNavOptions}>
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'Meal categories',
                }}
            />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                options={({ route }) => ({
                    title: CATEGORIES.find((c) => c.id === route.params.categoryId)?.title
                })}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={({ route }) => ({
                    title: MEALS.find((m) => m.id === route.params.mealId)?.title
                })}
            />
        </Stack.Navigator>
    );
};

export default MealsNavigator;

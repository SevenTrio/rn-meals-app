import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import stackNavOptions from '../constants/stackNavOptions';

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
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
            />
        </Stack.Navigator>
    );
};

export default MealsNavigator;

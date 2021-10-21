import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
                }}
            >
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
                    options={{
                        title: 'Meal detail'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;

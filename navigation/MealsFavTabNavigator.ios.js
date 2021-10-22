import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';

import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.accent,
            }}
        >
            <Tab.Screen
                name="Meals"
                component={MealsNavigator}
                options={{
                    tabBarLabel: 'Meals',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'ios-restaurant' : 'ios-restaurant-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'ios-star' : 'ios-star-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default MealsFavTabNavigator;

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MealsNavigator from './MealsNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import colors from '../constants/colors';

const Tab = createMaterialBottomTabNavigator();

const MealsFavTabNavigator = () => {
    return (
        <Tab.Navigator shifting={true}>
            <Tab.Screen
                name="MealsTab"
                component={MealsNavigator}
                options={{
                    tabBarLabel: 'Meals',
                    tabBarColor: colors.primary,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'ios-restaurant' : 'ios-restaurant-outline'}
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="FavoritesTab"
                component={FavoritesNavigator}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarColor: colors.accent,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'ios-star' : 'ios-star-outline'}
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default MealsFavTabNavigator;

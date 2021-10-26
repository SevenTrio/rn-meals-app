import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import stackNavOptions from '../constants/stackNavOptions';

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackNavOptions}>
            <Stack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title: 'Favorites',
                }}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
            />
        </Stack.Navigator>
    );
};

export default FavoritesNavigator;

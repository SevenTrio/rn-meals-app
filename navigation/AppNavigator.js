import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MealsFavTabNavigator from './MealsFavTabNavigator';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MealsFavTabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;

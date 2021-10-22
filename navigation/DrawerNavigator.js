import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MealsFavTabNavigator from './MealsFavTabNavigator';
import FiltersNavigator from './FiltersNavigator';
import colors from '../constants/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: colors.primary,
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                }
            }}
        >
            <Drawer.Screen
                name="MealsFavNav"
                component={MealsFavTabNavigator}
                options={{
                    drawerLabel: 'Meals'
                }}
            />
            <Drawer.Screen
                name="FiltersNav"
                component={FiltersNavigator}
                options={{
                    drawerLabel: 'Filters'
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

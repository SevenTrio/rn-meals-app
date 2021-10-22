import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FiltersScreen from '../screens/FiltersScreen';
import stackNavOptions from '../constants/stackNavOptions';

const Stack = createNativeStackNavigator();

const FiltersNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackNavOptions}>
            <Stack.Screen
                name="Filters"
                component={FiltersScreen}
                options={{
                    title: 'Filters'
                }}
            />
        </Stack.Navigator>
    );
};

export default FiltersNavigator;

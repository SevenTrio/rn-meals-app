import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Switch, Platform, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BoldText from '../components/BoldText';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/actions/mealsActions';
import colors from '../constants/colors';

const FilterSwitch = ({ label, value, onChange }) => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText>{label}</DefaultText>
            <Switch
                trackColor={{ true: colors.primary, false: '' }}
                thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                value={value}
                onValueChange={onChange}
            />
        </View>
    );
};

const FiltersScreen = ({ navigation }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                </HeaderButtons>
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Save"
                        iconName="ios-save"
                        onPress={saveFilters}
                    />
                </HeaderButtons>
            )
        });
    }, [navigation, saveFilters]);

    return (
        <View style={styles.screen}>
            <BoldText style={styles.title}>Available Filters /
                Restrictions
            </BoldText>
            <FilterSwitch
                label="Gluten-free"
                value={isGlutenFree}
                onChange={(newValue) => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                value={isLactoseFree}
                onChange={(newValue) => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                value={isVegan}
                onChange={(newValue) => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                value={isVegetarian}
                onChange={(newValue) => setIsVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        margin: 20,
        textAlign: 'center',
        fontSize: 22
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;

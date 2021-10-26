import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavoritesScreen = ({ navigation }) => {
    const favMeals = useSelector((state) => state.meals.favoriteMeals);

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
        });
    }, [navigation]);

    const handleSelectMeal = (id) => {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    };

    if (!favMeals || !favMeals.length) {
        return (
            <View style={styles.emptyState}>
                <DefaultText>No favorite meals found. Start adding
                    some!</DefaultText>
            </View>
        );
    }

    return <MealList meals={favMeals} onSelectMeal={handleSelectMeal} />;
};

const styles = StyleSheet.create({
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;

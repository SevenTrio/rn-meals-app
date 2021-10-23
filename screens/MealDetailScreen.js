import React, { useLayoutEffect } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BoldText from '../components/BoldText';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const ListItem = ({ children }) => (
    <View style={styles.listItem}>
        <DefaultText>{children}</DefaultText>
    </View>
);

const MealDetailScreen = ({ route, navigation }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find((m) => m.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => console.log('Mark as favorite!')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <BoldText style={styles.title}>Ingredients</BoldText>
            {selectedMeal.ingredients.map((ingredient) => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <BoldText style={styles.title}>Steps</BoldText>
            {selectedMeal.steps.map((step) => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 22,
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    }
});

export default MealDetailScreen;

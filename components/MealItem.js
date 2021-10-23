import React from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import BoldText from './BoldText';
import DefaultText from './DefaultText';

const MealItem = ({ meal, onSelectMeal }) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
                <View style={styles.container}>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: meal.imageUrl }}
                            style={styles.bgImage}
                        >
                            <BoldText style={styles.title} numberOfLines={1}>
                                {meal.title}
                            </BoldText>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{meal.duration}m</DefaultText>
                        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#e5e5e5'
    },
    container: {
        height: '100%',
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
});

export default MealItem;

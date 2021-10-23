import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldText = ({ style, children, restProps }) => {
    return (
        <Text style={{ ...styles.boldText, ...style }} {...restProps}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'open-sans-bold'
    }
});

export default BoldText;

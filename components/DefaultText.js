import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ style, children, restProps }) => {
    return (
        <Text style={{ ...styles.defaultText, ...style }} {...restProps}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: 'open-sans'
    }
});

export default DefaultText;

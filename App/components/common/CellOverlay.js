import React from 'react';
import { View, StyleSheet } from 'react-native';

const CellOverlay = ({ color = '#fff', opacity = 0.4 }) => {
    return <View style={generateStyles(color, opacity).container} />;
};

const generateStyles = (color, opacity) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            height: 200,
            backgroundColor: color,
            opacity: opacity
        }
    });
};

export { CellOverlay };

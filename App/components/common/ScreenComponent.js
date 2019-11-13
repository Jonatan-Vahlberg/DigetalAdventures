import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { isUndefiendOrNull } from '../../helpers';
import themes from '../../resources/themes';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');

const ScreenComponent = ({ children, theme, style }) => {
    const styles = [generateStyles(theme).container, style];
    return <View style={styles}>{children}</View>;
};

ScreenComponent.defaultProps = {
    theme: 'DEF',
    children: null,
    style: {}
};

const generateStyles = theme => {
    return StyleSheet.create({
        container: {
            height,
            width,
            backgroundColor: themes[theme].backgroundColor
        }
    });
};

export { ScreenComponent };

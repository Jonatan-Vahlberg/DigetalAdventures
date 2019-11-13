import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HomeCell = ({ colors, title, action, outline }) => {
    const { container, outlineContainer, titlestyle } = generateStyles(colors);
    const containerStyle = outline ? [container, outlineContainer] : container;
    return (
        <TouchableOpacity onPress={() => action()}>
            <View style={containerStyle}>
                <Text style={titlestyle}>{title} </Text>
            </View>
        </TouchableOpacity>
    );
};

HomeCell.defaultProps = {
    title: 'default cell',
    colors: {
        primary: '#fff',
        secondary: '#000'
    },
    action: () => {},
    outline: false
};

const generateStyles = colors => {
    return StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary
        },
        outlineContainer: {
            backgroundColor: 'transparent',
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderColor: colors.secondary
        },
        titlestyle: {
            fontSize: 23,
            fontWeight: '500',
            paddingVertical: 20,
            color: colors.secondary
        }
    });
};

export { HomeCell };

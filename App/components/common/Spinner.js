import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => {
    return <ActivityIndicator size={size} color={color} />;
};

Spinner.defaultProps = {
    size: 'large',
    color: '#38A0FF'
};

export { Spinner };

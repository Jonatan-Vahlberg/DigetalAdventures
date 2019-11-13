import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import themes from '../../resources/themes';
import { CellOverlay } from '../common';
import { breakoutDate } from '../../helpers';
class AdventureCellSoon extends React.Component {
    render() {
        const { item } = this.props;
        const { title, image, themeCode, startTime } = item;

        const { container, imageStyle } = this.generateStyles();
        return (
            <View style={container}>
                <Image source={{ uri: image }} style={imageStyle} />
                {this.renderComingSoon(themeCode)}
            </View>
        );
    }

    renderComingSoon = themeCode => {
        const {
            soonContainer,
            soonSubConatiner,
            centered,
            soonText
        } = this.generateStyles();
        return (
            <View style={soonContainer}>
                <CellOverlay color='#FFF' opacity={0.8} />
                <View style={[soonContainer, soonSubConatiner]}>
                    <View style={centered}>
                        <Text style={soonText}>Coming Soon</Text>
                        <Text>{breakoutDate(this.props.item.startTime)}</Text>
                    </View>
                </View>
            </View>
        );
    };

    generateStyles = () => {
        const { themeCode } = this.props.item;
        const { colorInactive, secondaryColor } = themes[themeCode];
        return StyleSheet.create({
            container: {
                backgroundColor: secondaryColor,
                flex: 1,
                borderWidth: 2,
                borderColor: colorInactive,
                marginHorizontal: 15,
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 0.1,
                marginVertical: 5
            },
            imageStyle: {
                width: '100%',
                height: undefined,
                aspectRatio: 16 / 9
            },
            soonContainer: {
                position: 'absolute',
                flex: 1,
                width: '100%',
                height: '100%'
            },
            soonSubConatiner: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            },
            centered: {
                alignItems: 'center',
                justifyContent: 'center'
            },
            soonText: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colorInactive
            }
        });
    };
}

export default AdventureCellSoon;

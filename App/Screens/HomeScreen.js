import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { ScreenComponent } from '../components/common';
import { HomeCell } from '../components/cells';
import themes from '../resources/themes';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends React.Component {
    render() {
        const { imageStyle } = this.generateStyles();
        const { activeColor, backgroundColor, secondaryColor } = themes.DEF;
        return (
            <ScreenComponent>
                <Image
                    source={require('../../assets/DAC.png')}
                    style={imageStyle}
                />
                <ScrollView>
                    <HomeCell
                        title='Adventures'
                        action={() => Actions.adventures()}
                        colors={{
                            primary: activeColor,
                            secondary: secondaryColor
                        }}
                    />
                    <HomeCell
                        title='Credits'
                        outline
                        colors={{ primary: '#232323', secondary: activeColor }}
                    />
                </ScrollView>
            </ScreenComponent>
        );
    }

    generateStyles = () => {
        return StyleSheet.create({
            imageStyle: {
                width: '100%',
                height: undefined,
                aspectRatio: 16 / 9
            }
        });
    };
}

export default HomeScreen;

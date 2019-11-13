import React from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import ProgressBar from 'react-native-progress/Bar';
import themes from '../../resources/themes';
import { Overlay } from '../common';
import { Actions } from 'react-native-router-flux';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('screen').height;
class AdventureCell extends React.Component {
    render() {
        const { item } = this.props;
        const { title, image, themeCode, tasks, tasksDone, startTime } = item;

        const {
            container,
            innerContainer,
            imageStyle,
            titleStyle,
            subtitleStyle,
            subActive,
            subInactive
        } = this.generateStyles();
        const done = tasksDone >= tasks;
        return (
            <TouchableWithoutFeedback
                onPress={() =>
                    Actions.adventureDetail({ title, itemStub: item })
                }>
                <View style={container}>
                    <View>
                        <Image source={{ uri: image }} style={imageStyle} />
                        {done && this.renderDone(themeCode)}
                    </View>
                    <View style={innerContainer}>
                        <Text style={titleStyle}>{title}</Text>
                        <View>
                            <Text style={subtitleStyle}>
                                Tasks done:{' '}
                                <Text style={subInactive}>{tasksDone}</Text> /{' '}
                                <Text style={subActive}>{tasks}</Text>
                            </Text>
                            <ProgressBar
                                progress={tasksDone / tasks}
                                color={themes[themeCode].colorInactive}
                                unfilledColor={themes[themeCode].colorVariant}
                                height={10}
                                width={null}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderDone = themeCode => {
        const {
            doneContainer,
            doneSubConatiner,
            centered,
            doneText
        } = this.generateStyles();
        const { colorVariant, colorInactive } = themes[themeCode];
        return (
            <View style={doneContainer}>
                <Overlay color={colorVariant} opacity={0.6} />
                <View style={[doneContainer, doneSubConatiner]}>
                    <TouchableWithoutFeedback>
                        <View style={centered}>
                            <Icon name='loop' color={colorInactive} size={40} />
                            <Text style={doneText}>Retry</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={centered}>
                            <Icon name='eye' color={colorInactive} size={40} />
                            <Text style={doneText}>Look Trough</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    };

    generateStyles = () => {
        const { themeCode, tasks, tasksDone } = this.props.item;
        const {
            color,
            colorActive,
            colorVariant,
            colorInactive,
            secondaryColor
        } = themes[themeCode];
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
            innerContainer: {
                borderTopWidth: 2,
                borderTopColor: colorInactive,
                paddingHorizontal: 5
            },
            imageStyle: {
                width: '100%',
                height: undefined,
                aspectRatio: 16 / 9
            },
            titleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: color
            },
            subtitleStyle: {
                color: colorVariant,
                fontWeight: '500'
            },
            subActive: {
                color: colorActive
            },
            subInactive: {
                color: colorInactive
            },

            doneContainer: {
                position: 'absolute',
                flex: 1,
                width: '100%',
                height: '100%'
            },
            doneSubConatiner: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            },
            centered: {
                alignItems: 'center',
                justifyContent: 'center'
            },
            doneText: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colorInactive
            }
        });
    };
}

export default AdventureCell;

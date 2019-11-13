import React from 'react';
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native';
import { ScreenComponent, Spinner } from '../components/common';
import { isUndefiendOrNull } from '../helpers';

const tempData = {
    title: 'Murder on the orient express',
    id: '346789gfcvhsfv',
    tasks: 4,
    tasksDone: 2,
    image:
        'https://static.parade.com/wp-content/uploads/2017/10/MOTOE-Cast-FTR.jpg',
    themeCode: 'DEF',
    startTime: '2019-10-23T20:26:30',
    tasks: []
};

const playerTemp = {
    name: 'Marcus Tennson'
};

const { width } = Dimensions.get('window');

class AdventureDetailScreen extends React.Component {
    render() {
        const { itemStub, item } = this.props;
        const hasNotLoaded = isUndefiendOrNull(item);
        let currentItem = hasNotLoaded ? itemStub : item;
        const { image } = this.generateStyles();
        return (
            <ScreenComponent>
                <Image source={{ uri: currentItem.image }} style={image} />
                {this.renderTaskHeader(itemStub, playerTemp)}
                {this.renderTasks(hasNotLoaded)}
            </ScreenComponent>
        );
    }

    renderTasks = hasNotLoaded => {
        if (hasNotLoaded) {
            return <Spinner />;
        } else {
            return null;
        }
    };

    renderTaskHeader = ({ tasks, tasksDone, ...rest }, player) => {
        return (
            <View>
                <Text>
                    Tasks done: {tasksDone}/{tasks}
                </Text>
                <Text>Adventurer: {player.name}</Text>
            </View>
        );
    };

    generateStyles = () => {
        return StyleSheet.create({
            image: {
                width,
                height: undefined,
                aspectRatio: 16 / 9
            }
        });
    };
}

export default AdventureDetailScreen;

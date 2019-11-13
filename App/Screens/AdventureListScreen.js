import React from 'react';
import { FlatList } from 'react-native';
import { ScreenComponent } from '../components/common';
import { dateHasPassed } from '../helpers';
import AdventureCell from '../components/cells/AdventureCell';
import AdventureCellSoon from '../components/cells/AdventureCellSoon';

const TempData = {
    title: 'Murder on the orient express',
    id: '346789gfcvhsfv',
    tasks: 4,
    tasksDone: 2,
    image:
        'https://static.parade.com/wp-content/uploads/2017/10/MOTOE-Cast-FTR.jpg',
    themeCode: 'DEF',
    startTime: '2019-10-23T20:26:30',
    link: 'murderAdv'
};

class AdventureListScreen extends React.Component {
    render() {
        return (
            <ScreenComponent>
                <FlatList
                    data={[TempData]}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </ScreenComponent>
        );
    }

    renderItem = ({ item }) => {
        console.log(dateHasPassed(item.startTime));
        if (dateHasPassed(item.startTime)) {
            return <AdventureCell item={item} />;
        }
        return <AdventureCellSoon item={item} />;
    };
}

export default AdventureListScreen;

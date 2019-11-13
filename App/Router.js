import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './Screens/HomeScreen';
import AdventureListScreen from './Screens/AdventureListScreen';
import AdventureDetailScreen from './Screens/AdventureDetailScreen';

class FluxRouter extends React.Component {
    render() {
        return (
            <Router>
                <Stack key='homeStack'>
                    <Scene
                        key='home'
                        component={HomeScreen}
                        initial
                        hideNavBar
                    />
                    <Scene key='adventures' component={AdventureListScreen} />
                    <Scene
                        key='adventureDetail'
                        component={AdventureDetailScreen}
                    />
                    <Scene key='credits' component={HomeScreen} />
                </Stack>
            </Router>
        );
    }
}

export default FluxRouter;

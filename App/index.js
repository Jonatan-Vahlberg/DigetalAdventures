import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FluxRouter from './Router';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <FluxRouter />
            </Provider>
        );
    }
}

export default App;

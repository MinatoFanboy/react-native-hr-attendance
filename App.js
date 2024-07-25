import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavContainer from '~/navigation';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AppNavContainer />
        </GestureHandlerRootView>
    );
};

export default App;

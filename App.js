import React from 'react';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabBar from './src/bottomTabBar';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabBar />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

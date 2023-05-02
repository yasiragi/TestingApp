import React from 'react';
import {Provider} from 'react-redux';
import store from './reduxStore/store';
import AppNavigation from './appNavigation';
import {Toast} from './global/components';

const App = ({params}) => (
  <Provider store={store}>
    <AppNavigation />
    <Toast />
  </Provider>
);

export default App;

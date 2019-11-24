'use strict';
/* @flow */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import configureStore from './src/redux/configureStore';
import DiaryScreen from './src/screens/DiaryScreen';

const {persistor, store} = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DiaryScreen />
        </PersistGate>
      </Provider>
    );
  }
}

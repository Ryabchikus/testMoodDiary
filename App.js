'use strict';
/* @flow */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import i18n from 'i18next';

import configureStore from './src/redux/configureStore';
import i18nextConfig from './src/locale';

import DiaryScreen from './src/screens/DiaryScreen';

const {persistor, store} = configureStore();
i18n.init(i18nextConfig);

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

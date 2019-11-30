/* @flow */

import {createStore} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import diary from './diary';

const persistConfig = {
  key: 'root',
  whitelist: [], //['diary'],
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(persistConfig, {
  diary,
});

export default function configureStore() {
  const store = createStore(reducer);
  const persistor = persistStore(store);

  return {persistor, store};
}

import {configureStore} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {rootReducer} from './rootReducer';

const initializeStore = () => {
  const store = configureStore({reducer: rootReducer});
  return store;
};

export function makeStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}

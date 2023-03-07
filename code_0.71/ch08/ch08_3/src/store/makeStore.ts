import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {logger} from './logger';
import {useMemo} from 'react';
import {rootReducer} from './rootReducer';

const initializeStore = () => {
  let middlewares: any[] = [thunk];
  if (__DEV__) {
    //middlewares.push(logger);
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  return store;
};

export function makeStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}

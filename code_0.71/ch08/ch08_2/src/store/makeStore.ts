import {configureStore} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {rootReducer} from './rootReducer';

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    // https://stackoverflow.com/questions/65217815/redux-handling-really-large-state-object
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return store;
};

export function makeStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}

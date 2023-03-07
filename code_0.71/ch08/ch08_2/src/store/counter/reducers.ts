import * as T from './types';

const initialState: T.CounterState = 0;

export const counterReducer = (
  state: T.CounterState = initialState,
  action: T.CounterActions,
) => {
  switch (action.type) {
    case '@counter/increase':
      return state + 1;
    case '@counter/decrease':
      return state - 1;
  }
  return state;
};

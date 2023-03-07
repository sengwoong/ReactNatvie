import type {ClockState, SetTimeActions} from './types';

const initialState: ClockState = {currentDate: '', currentTime: ''};

export const clockReducer = (
  state: ClockState = initialState,
  action: SetTimeActions,
) => {
  switch (action.type) {
    case '@clock/setTime':
      return {currentDate: action.currentDate, currentTime: action.currentTime};
  }
  return state;
};

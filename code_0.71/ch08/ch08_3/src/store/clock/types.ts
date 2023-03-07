import type {Action} from 'redux';

export type ClockState = {
  currentDate: string;
  currentTime: string;
};

export type SetTimeAction = Action<'@clock/setTime'> & ClockState;
export type SetTimeActions = SetTimeAction;

import type {Action} from 'redux';

export type CounterState = number;

export type IncreaseAction = Action<'@counter/increase'>;
export type DecreaseAction = Action<'@counter/decrease'>;

export type CounterActions = IncreaseAction | DecreaseAction;

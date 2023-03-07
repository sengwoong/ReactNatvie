import type {Action} from 'redux';

export type HumorState = {
  humorText: string;
  errorMessage: string;
  loading: boolean;
};
export type SetHumorTextAction = Action<'@humor/setHumor'> & {
  humorText: string;
};
export type SetErrorMessageAction = Action<'@humor/setErrorMessage'> & {
  errorMessage: string;
};
export type SetloadingAction = Action<'@humor/setLoading'> & {
  loading: boolean;
};
export type HumorActions =
  | SetHumorTextAction
  | SetErrorMessageAction
  | SetloadingAction;

import type {HumorState, HumorActions} from './types';

const initialState: HumorState = {
  humorText: '',
  errorMessage: '',
  loading: false,
};
export const humorReducer = (
  state: HumorState = initialState,
  action: HumorActions,
) => {
  switch (action.type) {
    case '@humor/setHumor':
      return {...state, humorText: action.humorText};
    case '@humor/setErrorMessage':
      return {...state, errorMessage: action.errorMessage};
    case '@humor/setLoading':
      return {...state, loading: action.loading};
  }
  return state;
};

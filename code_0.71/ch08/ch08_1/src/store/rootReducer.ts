import {AppState} from './AppState';
import type {LoginActions} from './actions';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {email: '', name: '', password: ''},
  // 나중에 다른 멤버가 추가될 수 있습니다.
};

export const rootReducer = (
  state: AppState = initialState,
  action: LoginActions,
) => {
  switch (action.type) {
    case 'login':
      return {...state, loggedUser: action.loggedUser, loggedIn: true};
    case 'logout':
      return initialState;
  }
  return state;
};

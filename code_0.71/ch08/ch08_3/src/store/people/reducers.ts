import type {PeopleState, PeopleActions} from './types';

const initialState: PeopleState = [];

export const peopleReducer = (
  state: PeopleState = initialState,
  action: PeopleActions,
) => {
  switch (action.type) {
    case '@person/add':
      return [action.payload, ...state];
    case '@person/delete':
      return state.filter(person => person.id !== action.payload.id);
    case '@person/deleteAll':
      return initialState;
  }
  return state;
};

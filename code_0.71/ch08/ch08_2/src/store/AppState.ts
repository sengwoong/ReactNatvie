import * as L from './login';
import * as C from './counter';
import * as CL from './clock';
import * as P from './people';

export type AppState = {
  login: L.LoginState;
  counter: C.CounterState;
  clock: CL.ClockState;
  people: P.PeopleState;
};

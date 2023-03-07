import * as L from './login';
import * as C from './counter';
import * as CL from './clock';
import * as P from './people';
import * as H from './humor';

export type AppState = {
  login: L.LoginActions;
  counter: C.CounterState;
  clock: CL.ClockState;
  people: P.PeopleState;
  humor: H.HumorState;
};

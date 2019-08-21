import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authentication: boolean;
}

const initialState: State = {
  token: null,
  authentication: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authentication: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authentication: false
      };
    default:
      return state;
  }
}

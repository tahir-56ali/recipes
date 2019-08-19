

export interface State {
  token: string;
  authentication: boolean;
}

const initialState: State = {
  token: null,
  authentication: false
};

export function authReducer(state = initialState, action) {
  return state;
}

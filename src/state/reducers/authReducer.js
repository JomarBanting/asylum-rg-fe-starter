import { SET_AUTH_STATE } from '../actionTypes';

export const initialState = {
  isAuthenticated: false,
  user: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_STATE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;

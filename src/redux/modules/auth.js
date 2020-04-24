// Actions
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const FINISH_LOADING = 'FINISH_LOADING';

// Initial State
const INTIAL_STATE = {
  isAuthenticated: false,
  isLoading: true
};

// Action Creators
export const finishLoading = () => {
  return {
    type: FINISH_LOADING
  };
};

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// Reducer
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FINISH_LOADING:
      return { ...state, isLoading: false };
    case SIGN_IN:
      return { ...state, isAuthenticated: true, isLoading: false };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
};

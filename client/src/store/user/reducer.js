import { SET_AUTH, SET_USER } from './consts'

const initialState = {
  userData: {},
  isAuth: false
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, isAuth: !state.isAuth }
    }
    case SET_USER: {
      return { ...state, userData: action.payload }
    }
    default:
      return state
  }
};
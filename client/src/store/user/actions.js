import { SET_AUTH, SET_USER } from './consts';

export function setIsAuth() {
  return {
    type: SET_AUTH
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

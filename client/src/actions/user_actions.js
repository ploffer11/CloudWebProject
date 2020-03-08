import axios from 'axios';

import { REGISTER_USER, LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
  const req = axios.post('/users/login', dataToSubmit).then(res => res.data);

  return {
    type: LOGIN_USER,
    payload: req,
  };
}

export function registerUser(dataToSubmit) {
  const req = axios.post('/users/register', dataToSubmit).then(res => res.data);

  return {
    type: REGISTER_USER,
    payload: req,
  };
}

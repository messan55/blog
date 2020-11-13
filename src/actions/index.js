import axios from "axios";
import {
  SET_AUTHENTIFICATION,
  PARSE_ERROR,
  RESET_ERROR
} from "./types";


export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn
  };
}

// export const signinUser = (values, history) => async dispatch => {
//   const res = await axios.post('http://localhost:4000/api/signin', values).catch(error => console.error(error));
//   history.push('/');
//   dispatch({ type: SET_AUTHENTIFICATION, payload: res.data })
// };

export const signinUser = ({ email, password }, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:4000/api/signin', { email, password }); 
    localStorage.setItem("token", res.data.token);
    dispatch(setAuthentification(true));
    history.push('/');
  } catch (error) {
    dispatch(parseError(error.response.data.message));
  }
}

export function signOut() {
  return function(dispatch) {
    dispatch(setAuthentification(false));
    localStorage.removeItem("token");
  };
}

export const signupUser = ({ email, password }, history) => async dispatch => {
  console.log(email, password);
  // try {
    const res = await axios.post('http://localhost:4000/api/signup', { email, password });
    console.log(res);
    localStorage.setItem("token", res.data.token);
    dispatch(setAuthentification(true));
    history.push("/");   
  // } catch(error) {
  //   dispatch(parseError(error));
  // }
}

export function parseError(errorMessage) {
  return { type: PARSE_ERROR, payload: errorMessage };
}

export function resetError() {
  return { type: RESET_ERROR };
}
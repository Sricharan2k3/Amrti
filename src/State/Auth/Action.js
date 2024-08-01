import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
  LOGOUT,
} from "./ActionTypes";
import api, { API_BASE_URL } from "../../config/api";

// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    } else {
      console.log("registerr :", user);
      dispatch(registerFailure(user.message));
    }

    dispatch(registerSuccess(user));
  } catch (error) {
    let errorMessage = "An unexpected error occurred";
    if (error.response && error.response.data) {
      errorMessage = error.response.data.error;
    } else if (error.message) {
      errorMessage = error.message;
    }
    dispatch(registerFailure(errorMessage));
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) localStorage.setItem("jwt", user.jwt);
    console.log("login ", user);
    dispatch(loginSuccess(user));
  } catch (error) {
    let errorMessage = "An unexpected error occurred";
    if (error.response && error.response.data) {
      errorMessage = error.response.data.error;
    } else if (error.message) {
      errorMessage = error.message;
    }
    dispatch(loginFailure(errorMessage));
  }
};

//  get user from token
export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data;
      console.log("req User ", user);
      dispatch({ type: GET_USER_SUCCESS, payload: user });

      return;
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};
export const getAllUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users`);
      const users = response.data;
      dispatch({ type: GET_ALL_USER_SUCCESS, payload: users });
      console.log("req User ", users);
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      dispatch({ type: GET_ALL_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = (token) => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };
};

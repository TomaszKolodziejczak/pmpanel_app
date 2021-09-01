import axios from 'axios';

export const USER_LOADED = 'USER_LOADED'
export const USER_LOADING = 'USER_LOADING'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'




// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    axios
        .get('/users/auth/user', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

// LOGIN USER
export const login = (email, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Request Body
    const body = JSON.stringify({ email, password });

    axios
        .post('/users/auth/login', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
            alert("Incorrect email or passsword. Login failed")
        });
};

// REGISTER USER
export const register = ({ email, password, first_name, last_name, age, sex, phone }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Request Body
    const body = JSON.stringify({ email, password, first_name, last_name, age, sex, phone });
    console.log(body)
    axios
        .post('/users/auth/register', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: REGISTER_FAIL,
            });
            alert("Incorrect data. Registraction failed")
        });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
        .post('/users/auth/logout', null, tokenConfig(getState))
        .then((res) => {
            dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            console.log(err)
        });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};
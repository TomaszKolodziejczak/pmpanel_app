import axios from "axios";
import { tokenConfig } from './auth';

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const EDIT_USER = 'EDIT_USER'
export const GET_USERS = 'GET_USERS'



//GET USERS
export const getUsers = () => (dispatch, getState) => {
    axios
        .get('http://127.0.0.1:8000/users/auth/users', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};

// ADD USER
export const addUser = ({
    first_name,
    last_name,
    email,
    age,
    sex,
    phone,
}) => (dispatch, getState) => {
    axios
        .post(`http://127.0.0.1:8000/users/register`, {
            first_name,
            last_name,
            email,
            age,
            sex,
            phone,
        })
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};



// // EDIT USER
// export const editUser = ({
//     first_name,
//     last_name,
//     email,
//     sex,
//     phone,
//     id }) => (dispatch, getState) => {
//         axios
//             .put(`http://127.0.0.1:8000/users/update/${id}`,
//                 {
//                     first_name,
//                     last_name,
//                     email,
//                     sex,
//                     phone,
//                     id,
//                 })
//             .then(res => {
//                 dispatch({
//                     type: EDIT_USER,
//                     payload: res.data,
//                 });
//             })
//             .catch(err => console.log(err));
//     };


// DELETE USER
export const deleteUser = (id) => (dispatch, getState) => {
    axios
        .delete(`http://127.0.0.1:8000/users/delete/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_USER,
                payload: id,
            });
        })
        .catch(err => console.log(err));
};

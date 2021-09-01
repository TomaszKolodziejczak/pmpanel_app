import axios from "axios";
import { tokenConfig } from './auth';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const GET_COMMENTS = 'EDIT_COMMENT';

// const minDate = new Date().toISOString().slice(0, 10)


//GET COMMENTS

export const getComments = () => (dispatch, getState) => {
    axios
        .get('/comments/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};


//ADD COMMENT
export const addComment = ({
    text,
    projectID,
    author
}) => (dispatch, getState) => {
    console.log(author)
    axios

        .post('/comments/create',
            {
                text,
                projectID,
                author,
            }, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};


//EDIT COMMENT
export const editComment = ({
    text,
    projectID,
    author,
    id
}) => (dispatch, getState) => {
    axios
        .put(`/comments/update/${id}`,
            {
                text,
                projectID,
                author,
            })
        .then(res => {
            dispatch({
                type: EDIT_COMMENT,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};

//DELETE COMMENT
export const deleteComment = id => (dispatch, getState) => {
    axios
        .delete(`/comments/delete/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_COMMENT,
                payload: id,
            });
        })
        .catch(err => console.log(err));
};
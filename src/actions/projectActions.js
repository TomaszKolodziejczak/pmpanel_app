import axios from 'axios';
import { tokenConfig } from './auth';

export const ADD_PROJECT = 'ADD_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const GET_PROJECTS = 'GET_PROJECTS';


export const getProjects = () => (dispatch, getState) => {
    axios
        .get('/api/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PROJECTS,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};

//ADD PROJECT
export const addProject = ({
    project_name,
    start_date,
    end_date,
    status,
    description,
    created_date,
    last_modified,
    participants,
    author,
}) => (dispatch, getState) => {
    axios
        .post('/api/create',
            {
                project_name,
                start_date,
                end_date,
                status,
                description,
                created_date,
                last_modified,
                participants,
                author,
            }, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_PROJECT,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log(err)
            alert('Project has NOT been added.');
        });
};


//EDIT PROJECT

export const editProject = ({
    project_name,
    start_date,
    end_date,
    status,
    description,
    created_date,
    last_modified,
    participants,
    id,
}) => (dispatch, getState) => {
    axios
        .put(`/api/update/${id}`,
            {
                project_name,
                start_date,
                end_date,
                status,
                description,
                created_date,
                last_modified,
                participants,
            }, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: EDIT_PROJECT,
                payload: res.data,
            });
            alert('Project has been changed.');
        })
        .catch(err => {
            console.log(err);
            alert('You have no permission to change this project. Project has NOT been changed.');
        })
};

//DELETE PROJECT

export const deleteProject = id => (dispatch, getState) => {
    axios
        .delete(`/api/delete/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PROJECT,
                payload: id,
            });
            alert('Project has been deleted!')
        })
        .catch(err => {
            console.log(err);
            alert('You have no permission to delete this project. Project has NOT been deleted.');
        })
};



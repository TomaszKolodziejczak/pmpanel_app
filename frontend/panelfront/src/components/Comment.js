import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../actions/userActions';
import { getProjects } from '../actions/projectActions'


const Comment = ({ text, id, created_date, author, projectID }) => {

  //get users from api
  useEffect(() => {
    dispatch(getUsers());
  }, [])

  //get projects from api
  useEffect(() => {
    dispatch(getProjects());
  }, [])

  const users = useSelector(store => store.users);
  const projects = useSelector(store => store.projects);

  const dispatch = useDispatch();

  const createdDate = new Date(created_date).toLocaleString()

  //ger author name
  let authorName = ''
  let allUsers = [...users]
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].id === author) {
      console.log('trafione')
      authorName = allUsers[i].first_name;
      break;
    }
  }

  //get project author id
  let projectAuthorId = ''
  let allProjects = [...projects]
  for (var a = 0; a < allProjects.length; a++) {
    if (allProjects[a].id === projectID) {
      projectAuthorId = allProjects[a].author;
      break;
    }
  };

  let isProjectAuthor = (author === projectAuthorId);

  const authorStyle = {
    color: 'green'
  }


  return (
    <div>
      <li key={id} style={{ textDecoration: 'none', fontSize: 12, fontStyle: 'italic', listStyleType: 'none' }}>
        <p>
          <strong style={isProjectAuthor ? authorStyle : null}>{text} </strong>
          <i>({createdDate} by {authorName})  </i>
        </p>
      </li>
    </div >
  );
}

export default Comment;

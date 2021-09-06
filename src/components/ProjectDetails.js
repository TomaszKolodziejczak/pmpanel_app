import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types';

import BackButton from './Buttons';
import CommentsList from '../containers/CommentsList';
import FormAddComment from './FormAddComment';
import FormAddEditProject from './FormAddEditProject.jsx';
import { deleteProject } from '../actions/projectActions';
import { getUsers } from '../actions/userActions';


const ProjectDetails = ({
  project_name,
  start_date,
  end_date,
  status,
  description,
  participants,
  id,
  author, }) => {

  // const propTypes = {
  //   auth: PropTypes.object.isRequired,
  // };

  // const { user } = propTypes.auth;

  // get users from api
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  const users = useSelector(store => store.users);

  // get participants names 
  let allUsers = [...users]
  let allParticipants = [...participants]
  let names = []
  allParticipants.forEach(userId => allUsers.map(
    user => {
      if (user.id === userId) {
        names.push(`${user.first_name}, `)
      }
    }
  ))

  let authorName = ''

  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].id === author) {
      authorName = allUsers[i].first_name;
      break;
    }
  }

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const history = useHistory();

  const toggleElements = () => setIsVisibleForm(prev => !prev);

  const formOrButtonElement = isVisibleForm
    ? (
      <FormAddEditProject
        project_name={project_name}
        start_date={start_date}
        end_date={end_date}
        status={status}
        description={description}
        participants={participants}
        id={id}
        author={author}
        callback={toggleElements}
      />
    ) : (
      <button style={{ margin: 10 }} className="btn btn-primary" onClick={toggleElements}>
        Update
      </button>
    )

  const handleDelete = (id) => {
    if (window.confirm('Do you want to delete this project?')) {
      dispatch(deleteProject(id)
      );

      window.location = './'

    }
  }

  const statusNames = {
    0: 'New',
    1: 'Kickoff meeting',
    2: 'Ongoing',
    3: 'Last fixes',
    4: 'Finished',
  }
  const startDate = start_date.toLocaleString()
  const endDate = end_date.toLocaleString()

  return (
    <div className="col-md-10 m-auto">
      <div className="card card-body mt-5">
        <div className="card-header">{statusNames[status]}</div>

        <h5 className="card-title">{project_name}</h5>
        <div className="card-text">
          {description}
          <br />Author: {authorName}
          <br />Co-workers: {names}
          <br />
          {formOrButtonElement}
          <button style={{ margin: 10 }} className="btn btn-danger" onClick={() => handleDelete(id)} >
            Delete
          </button>
          <BackButton />
        </div>
        <p>You can edit or delete only your own projects</p>

        <div className="card-footer text-muted">Duration from {startDate} to {endDate}.</div>

      </div>

      <FormAddComment projectID={id} />
      <CommentsList id={id} />

    </div >
  );
}

export default ProjectDetails;

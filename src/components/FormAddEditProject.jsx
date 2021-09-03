import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import $ from 'jquery'

import { addProject, editProject } from '../actions/projectActions'
import { getUsers } from '../actions/userActions';

const FormAddEditProject = ({
  project_name = '',
  start_date = new Date().toISOString().split('T')[0],
  end_date = new Date().toISOString().split('T')[0],
  status = '0',
  description = '',
  participants = [],
  id,
  callback,
}) => {

  //get users from api
  useEffect(() => {
    dispatch(getUsers());
  }, [])
  const users = useSelector(store => store.users);

  const dispatch = useDispatch();
  const history = useHistory();

  //project attributes states setting
  const [nameInput, setNameInput] = useState(project_name);
  const [startDateInput, setStartDateInput] = useState(start_date);
  const [endDateInput, setEndDateInput] = useState(end_date);
  const [statusInput, setStatusInput] = useState(status);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [participantsInput, setParticipantsInput] = useState(participants);

  //project attributes states handling
  const handleNameChange = event => setNameInput(event.target.value);
  const handleStartDateChange = event => setStartDateInput(event.target.value);
  const handleEndDateChange = event => setEndDateInput(event.target.value);
  const handleStatusChange = event => setStatusInput(event.target.value);
  const handleDescriptionChange = event => setDescriptionInput(event.target.value);
  const handleParticipantsChange = () => {
    let multiple = $("#participantsIds").val() || []
    const CoworkersIds = multiple.map(item => Number(item))
    setParticipantsInput(CoworkersIds);
  }

  const handleOnSubmit = event => {
    event.preventDefault();

    const projectObject = {
      project_name: nameInput,
      id,
      start_date: startDateInput,
      end_date: endDateInput,
      status: Number(statusInput),
      description: descriptionInput,
      participants: participantsInput,
    };

    // clear form
    setNameInput('')
    setStartDateInput(new Date())
    setEndDateInput(new Date())
    setStatusInput('0')
    setParticipantsInput([])
    setDescriptionInput('')

    id
      ? dispatch(editProject(projectObject))
      : dispatch(addProject(projectObject));


    if (id) {
      callback();
      history.goBack();
    }
    history.push('/projects')
  }



  return (
    <div className="container" style={{ maxWidth: 400, alignContent: 'center' }}>
      <div className="card" style={{ margin: 15 }}>
        <div className="card-body bg-light">
          <i>Enter data below:</i>

          <form onSubmit={handleOnSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Project name</span>
              <input className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleNameChange}
                type="text"
                value={nameInput}
                placeholder={
                  nameInput
                    ? nameInput
                    : 'Enter project name here'
                }
                required />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Start date</span>
              <input className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleStartDateChange}
                type="date"
                value={startDateInput}
                placeholder={
                  startDateInput
                    ? startDateInput
                    : new Date()
                }
                required />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">End date</span>
              <input className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleEndDateChange}
                type="date"
                value={endDateInput}
                placeholder={
                  endDateInput
                    ? endDateInput
                    : new Date()
                }
                required />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Project description</span>
              <input className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleDescriptionChange}
                type="text"
                value={descriptionInput}
                rows="3"
                cols="30"
                placeholder={
                  descriptionInput
                    ? descriptionInput
                    : 'Enter project description here'
                }
                required />
            </div>

            <div>
              <label style={{ margin: 10 }}>
                Status
                <select
                  className="form-select"
                  aria-label="multiple select example"
                  onChange={handleStatusChange}
                  value={statusInput}
                  placeholder={
                    statusInput
                      ? statusInput
                      : '0'
                  }>
                  <option value='0'>New</option>
                  <option value='1'>Kickoff Meeting</option>
                  <option value='2'>Ongoing</option>
                  <option value='3'>Last Fixes</option>
                  <option value='4'>Finished</option>
                </select>
              </label>
            </div>

            <div>
              <label className="form-group">
                Co-workers
                <select
                  className="form-select"
                  aria-label="multiple select example"
                  names="participantsIds"
                  id="participantsIds"
                  type="text"
                  placeholder={participantsInput}
                  onChange={handleParticipantsChange}
                  multiple
                >
                  {users.map(user =>
                    <option key={user.id} value={user.id}
                    >{user.first_name}, {user.email}</option>)}
                </select>
              </label>
            </div>

            <button type="submit" style={{ margin: 10 }} className="btn btn-primary" href="/">
              {id
                ? 'Update'
                : 'Add new project'}
            </button>
          </form>
        </div >
      </div>
    </div>
  );
}

export default FormAddEditProject;
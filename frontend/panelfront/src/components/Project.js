import React from 'react';
import { NavLink } from 'react-router-dom';

const Project = ({
  project_name,
  start_date,
  end_date,
  status,
  id,
}) => {

  const statusNames = {
    0: 'New',
    1: 'Kickoff meeting',
    2: 'Ongoing',
    3: 'Last fixes',
    4: 'Finished',
  }

  const endDate = end_date.toLocaleString()

  return (

    <tr>
      <th scope="row">{statusNames[status]}</th>
      <td>{project_name}</td>
      <td>{endDate}</td>
      <td>
        <button className="btn btn-light">
          <NavLink
            style={{ textDecoration: 'none', visited: 'none' }}
            to={{ pathname: "/details", state: { id } }} >
            Click here to see project details
          </NavLink>
        </button>
      </td>
    </tr>

  );
}

export default Project;

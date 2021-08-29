import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProjects } from '../actions/projectActions';
import { getUsers } from '../actions/userActions';
import Project from '../components/Project';


const ProjectList = () => {

  //get project and users from store and api
  const dispatch = useDispatch()
  const projects = useSelector(store => store.projects);
  const users = useSelector(store => store.users);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const sortedById = projects.sort((a, b = 0) => (b.id) - (a.id));

  const projectsElements = sortedById.map(project => (
    <Project key={project.id} {...project} {...users} />
  ));

  return (
    <div className="card" style={{ margin: 15 }}>
      <div className="card-body bg-light">
        {!projectsElements.length
          ? 'There is no projects'
          : <table className="table table-hover">
            <thead>
              <tr className="fs-4">
                <th scope="col">#</th>
                <th scope="col">Project name</th>
                <th scope="col">Deadline</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="fs-5">
              {projectsElements}
            </tbody>
          </table>}
      </div>
    </div>
  );
}

export default ProjectList;
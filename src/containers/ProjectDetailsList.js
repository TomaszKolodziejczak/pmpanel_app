import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import ProjectDetails from '../components/ProjectDetails';


const ProjectDetailsList = (props) => {

  const location = useLocation()
  const id = location.state.id

  //get projects from store
  const projects = useSelector(store => store.projects);
  const projectToDetail = projects.filter(project => (
    project.id === id
  ));

  const projectDetails = projectToDetail.map(project => (
    <ProjectDetails key={project.id} {...project} />
  ));

  return (
    <div className="card" style={{ margin: 15 }}>
      <div className="card-body">
        <ul>
          {projectDetails}
        </ul>
      </div></div>
  );
}


export default ProjectDetailsList;
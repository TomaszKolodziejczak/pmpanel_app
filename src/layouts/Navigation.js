import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'


const list = [
  { name: "projects", path: "/projects" },
  { name: "add new project", path: "/add_or_update" },
  { name: "User details", path: "/admin" },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name} >
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li >
  ))

  return (

    <div className="card" style={{ margin: 15 }}>
      <div className="card-body">
        <nav className="main">
          <ul>
            {menu}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
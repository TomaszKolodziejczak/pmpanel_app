import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';


import FormAddEditProject from './components/FormAddEditProject.jsx';
import ProjectDetailsList from './containers/ProjectDetailsList';
import ProjectList from './containers/ProjectsList';
import Users from './components/Users.js';
import FormAddUser from './components/FormAddUser.jsx';
import FormEditUser from './components/FormEditUser.jsx';
import AdminPanel from './containers/AdminPanel.js';


const BaseRouter = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' exact component={ProjectList} />
                <Route exact path='/add_or_update' component={FormAddEditProject} />
                <Route exact path='/details' component={ProjectDetailsList} />
                <Route exact path='/projects' component={ProjectList} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/userupdate' component={FormEditUser} />
                <Route exact path='/useradd' component={FormAddUser} />
                <Route exact path='/admin' component={AdminPanel} />
            </Switch>
        </Fragment>
    );
}

export default BaseRouter;

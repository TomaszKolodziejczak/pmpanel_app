import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';


import FormAddEditProject from './components/FormAddEditProject.jsx';
import ProjectDetailsList from './containers/ProjectDetailsList';
import ProjectList from './containers/ProjectsList';
import AdminPanel from './components/accounts/AdminPanel.js';


const BaseRouter = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={ProjectList} />
                <Route exact path='/add_or_update' component={FormAddEditProject} />
                <Route exact path='/details' component={ProjectDetailsList} />
                <Route exact path='/projects' component={ProjectList} />
                <Route exact path='/admin' component={AdminPanel} />
            </Switch>
        </Fragment>
    );
}

export default BaseRouter;

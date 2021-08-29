import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import { Provider } from 'react-redux';
import store from './store/store';

import BaseRouter from './routes';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import PrivateRoute from './components/common/PrivateRoute';

import './styles/App.css'
import Register from './components/accounts/Register';
import Login from './components/accounts/Login'
import { loadUser } from './actions/auth'

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div className="app">
              <header>
                {<Header />}
              </header>
              <main>
                <aside>
                  {<Navigation />}
                </aside>
                <section className="page">
                  <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute component={BaseRouter} />
                  </Switch>
                </section>
              </main>
              <footer>
                {<Footer />}
              </footer>

            </div>

          </Router>
        </div>
      </Provider>
    )
  }
}

export default App;

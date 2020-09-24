import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error from './components/Error/Error';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul className="Nav">
              <li>
                <NavLink to="/courses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/users">
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="/courses" />
          {/* <Route render={() => <Error />} /> */}
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;

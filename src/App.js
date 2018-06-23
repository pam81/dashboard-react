import React, { Component } from 'react';
import { Grid, Navbar, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Dashboard from './pages/Dashboard'
import './App.css';


class App extends Component {
  render() {
    return (
          <div className="container landing">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-pass" component={ForgotPass} />

            </Switch>
          </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Dashboard from './pages/Dashboard'
import { isLoggedIn } from './utils/AuthService';
import './App.css';


class App extends Component {
  render() {
    return (
          
            <Switch>
              <Route exact path="/"  
                render={() => (
                  isLoggedIn() ? (
                    <Dashboard />
                  ) : (
                    <Redirect to="/login"/>
                  )
                )}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-pass" component={ForgotPass} />

            </Switch>
          
    );
  }
}

export default App;

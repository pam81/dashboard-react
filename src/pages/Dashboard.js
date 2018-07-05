import React, { Component } from 'react';
import {  withRouter} from 'react-router-dom'
import { logout } from '../utils/AuthService';

class Dashboard extends Component {

  out = () => {
    logout();
    this.props.history.push("/login");
  }
  render (){
    return (
      <div>
        Dashboard view

        <button onClick={this.out} >Logout</button>
       
      </div>
    )
  }
}
export default withRouter(Dashboard);
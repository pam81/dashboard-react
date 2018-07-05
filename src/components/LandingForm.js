import React, { Component } from 'react'
import logo from '../logo.svg'
import SignInForm from '../components/SignInForm'
import ForgotPassForm from '../components/ForgotPassForm'

export default class LandingForm extends Component {

  render (){
    return (
      <div className="container-fluid">
          <div className="card card-container landing">
                  <div className="top-logo">
                    <img  className="img-responsive" src={logo} alt="logo" />
                  </div>
                  {this.props.typeForm === 'login' ?  <SignInForm /> : <ForgotPassForm />}
                
                  
            </div>
        </div>
    )
  }
}
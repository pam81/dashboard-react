import React, { Component } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  render (){
    return (
      <div className="card card-container">
              <div className="top_logo">
                <img  className="img-responsive" src={logo} alt="logo" />
                </div>
                <form className="form-signin" 
                      name="loginForm">
                    
                    <input type="email" 
                            name="username" 
                            className="form-control" 
                            placeholder="Email address" 
                            required 
                            autoFocus
                            />
                    <input type="password" 
                          name="password" 
                          className="form-control" 
                          placeholder="Password" required
                          />
                    <button className="btn btn-primary btn-lg" 
                            type="submit">Sign in
                    </button>
                    <Link to="/forgot-pass" 
                      className="link-signin">
                        Forgot the password?
                    </Link>
                </form>
              
            </div>
    )
  }
}

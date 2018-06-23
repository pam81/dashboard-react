import React, { Component } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

export default class ForgotPass extends Component {
  
  render (){
    return (
      <div className="card card-container">
              <div className="top_logo">
                <img  className="img-responsive" src={logo} alt="logo" />
                </div>
                <form className="form-signin" 
                      name="forgotForm">
                    
                    <input type="email" 
                            name="username" 
                            className="form-control" 
                            placeholder="Email address" 
                            required 
                            autoFocus
                            />
                    
                    <button className="btn btn-primary btn-lg" 
                            type="submit">Send
                    </button>
                    <Link to="/login" 
                      className="link-signin">
                        Back to Login
                    </Link>
                </form>
              
            </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default class ForgotPassForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }


  render (){
    return (
      <form className="form-signin" 
      name="loginForm">
    
        <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              placeholder="Email address"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          > Send 
          </Button>
          <Link to="/login" 
            className="link-signin">
              Back to Login
          </Link>
      </form>
    )
  }
}
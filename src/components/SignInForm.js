import React, { Component } from 'react'
import { Link , withRouter} from 'react-router-dom'
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { login, setAccessToken } from '../utils/AuthService';

class SignInForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let self = this;
    login(this.state.email, this.state.password)
    .then(function(token){
      setAccessToken(token);
      self.props.history.push("/");
    }, function(failured){
      alert("Error");
    });
  }

  render (){
    return (
      <form className="form-signin" 
      onSubmit={this.handleSubmit}
      name="loginForm">
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              placeholder="Username"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup> 
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>       
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          > Sign in 
          </Button>
          <Link to="/forgot-pass" 
            className="link-signin">
              Forgot the password?
          </Link>
      </form>
    )
  }
}

export default withRouter(SignInForm);
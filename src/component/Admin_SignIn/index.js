import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { SignInForm } from "../Sign_In_Form";


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class AdminSignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
       <SignInForm formInputs={this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}


const AdminSignInForm = withFirebase(withRouter(AdminSignInFormBase));


export default AdminSignInForm;

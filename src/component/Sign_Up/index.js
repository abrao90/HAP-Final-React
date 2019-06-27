import React from 'react';
import {SignUpForm} from '../Sign_Up_Form';
import { withFirebase } from "../Firebase";
import { withRouter } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

// import './styles.css'

const INITIAL_STATE = {
    username: '',
    email: '',
    uid: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, passwordOne, username} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser)=>{
            const uid = authUser.user.uid;
              this.props.firebase.users(username).set({
                    username,
                    email,
                    uid,
                  }, {merge: true});
                 return authUser 
            })
            .then(() => {
                this.setState({
                    ...INITIAL_STATE
                });
                this.props.history.push(ROUTES.DASHBOARD);
            })
            .catch((error) => {
                this.setState({ error })
            })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, });
    }

    render() {
        return (
            <div className="SignIn-Page">
                <SignUpForm formInputs={this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
            </div>
        )
    }

}

const SignUp = withRouter(withFirebase(SignUpComponent));

export { SignUp };
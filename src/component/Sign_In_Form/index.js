import React from 'react';
import './styles.css'
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";


export const SignInForm = (props) => {
    const { email, password, error } = props.formInputs;

    const isDisabled = email === '' || password === '';

    return (
        <div className="SignIn-Form-Wrapper">
            <div className="SignIn-Form">
                <div>
                    <h1>Login</h1>
                </div>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label>
                            <div> Email</div>
                            <div>
                                <input type="email" name="email" value={email} onChange={props.onChange} />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div>
                                Password
                        </div>
                            <div>
                                <input type="password" name="password" value={password} onChange={props.onChange} />
                            </div>
                        </label>
                    </div>
                    <div>
                        <button disabled={isDisabled}>
                            Submit
                </button>
                    </div>
                </form>
            {error ? <p>{error.message}</p> : <p></p>}
            </div>
            <div>
                <div>
                    <div>
                    Not a User? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to={ROUTES.FORGET_PASSWORD}>Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
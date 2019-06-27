import React from 'react';
// import './styles.css'

export const SignUpForm = (props) => {
    const { username, email, passwordOne, passwordTwo, error } = props.formInputs;

    const isDisabled = email === '' || passwordOne === ''||
                        passwordTwo === '' ||
                        username === '' ||
                        passwordOne !== passwordTwo;


    return (
        <div className="SignIn-Form-Wrapper">
            <div className="SignIn-Form">
                <div>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label>
                            <div> Username</div>
                            <div>
                                <input type="username" name="username" pattern="[^' ']+" title="No Spaces are Allowed" value={username} onChange={props.onChange} />
                            </div>
                        </label>
                    </div>
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
                                <input type="password" name="passwordOne" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                 value={passwordOne} onChange={props.onChange} />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div>
                                Confirm Password
                        </div>
                            <div>
                                <input type="password" name="passwordTwo" value={passwordTwo} onChange={props.onChange} />
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
        </div>
    )
}
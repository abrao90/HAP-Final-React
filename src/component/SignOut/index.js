import React from "react";
import {withFirebase} from '../Firebase';
import {withRouter} from 'react-router-dom';
import * as ROUTE from '../../constants/routes';
const SignOutButton = ({ history, firebase }) => {
    return (
        <div>
            <button type="button" onClick={()=>{
                firebase.doSignOut();
                history.push(ROUTE.LANDING);
            }}>
                Sign Out
            </button>
        </div>
    )
}

export const SignOut = withRouter(withFirebase(SignOutButton));

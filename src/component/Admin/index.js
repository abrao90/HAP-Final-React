import React, { Fragment } from 'react';
import { compose } from 'recompose';
import {
  withAuthorization,
} from '../Session';


const AdminPageBase = () => (
  <Fragment>
    <h1>Admin</h1>
    <p>The Admin Page is accessible by every signed in admin user.</p>
    {/* <AdminDashboard /> */}
  </Fragment>
);

const condition = authUser =>{
  return authUser && authUser.userrole === 'admin';
}

const AdminPage = compose(
  withAuthorization(condition),
)(AdminPageBase);

export default AdminPage
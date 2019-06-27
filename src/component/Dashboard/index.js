import React from 'react';
import {
  withAuthorization,
} from '../Session';

const CustomerPageBase = () => (
  <div>
    <h1>Customer Page</h1>
    <p>The Customer Page is accessible by every signed in customer.</p>
  </div>
);

const condition = authUser => authUser && (authUser.userrole === 'customer' || authUser.userrole === 'admin' )


const CustomerPage = withAuthorization(condition)(CustomerPageBase);

export default CustomerPage;
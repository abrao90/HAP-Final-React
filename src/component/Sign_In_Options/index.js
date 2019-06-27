import React from "react"
import { Link } from 'react-router-dom';
import Button from "../../elements/Button"
import * as ROUTES from '../../constants/routes'

const SignInOptPage = () => (
  <div>
    <h1>SignIn As</h1>
    <div>
      <Link to={ROUTES.SIGNIN}>
        <Button title="Customer" />
      </Link>
    </div>
    <div>
    <Link to={ROUTES.VET_SIGNIN}>
        <Button title="Vet" />
    </Link>
    </div>
  </div>
)

export default SignInOptPage 
import React from "react"
import {
  withAuthorization,
} from "../Session"

const VetPageBase = () => (
  <div className="Hello">
    <h1>Vet</h1>
    <p>The Vet Page is accessible by every signed in vet user.</p>
  </div>
)

const condition = authUser => authUser && (authUser.userrole === 'vet' || authUser.userrole === 'admin' )

const VetPage = withAuthorization(condition)(VetPageBase)

export default VetPage;
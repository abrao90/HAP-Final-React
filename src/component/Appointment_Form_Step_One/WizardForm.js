import React, { useState } from "react"
import Styles from "./Styles"
import { Field } from "react-final-form"
import Wizard from "./Wizard"
import { withFirebase } from "../Firebase"
import * as ROUTES from "../../constants/routes"
import moment from "moment"


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)


const required = value => (value ? undefined : "Required")

const WizardFormBase = props => {
  const [emailError, setEmailError] = useState("")
  const [docID, setdocID] = useState("")
  const [date, setDate] = useState(new Date())


  function errorHandler() {
    setEmailError(
      <p>
        Email already exists please <a href={ROUTES.SIGNIN}>signin</a>
      </p>
    )
  }

  function dateUpdate(event){
      setDate(event)
  }
  return (
    <Styles>
      <h1>Make an appointment with the Vet</h1>
      <h2 />
      <a href="#">Free video consultation on confirmed appointment</a>
      <p style={{ textAlign: "center" }}>
        We can honor the appointment upto one hour after inquiry time.
      </p>
      <Wizard
        initialValues={{ employed: true, stooge: "larry" }}
        firebase={props.firebase}
        setDate={setDate}
        emailPrompt={errorHandler}
        date={date}
        setdocID={setdocID}
        // onSubmit={onSubmit}
      >
       <Wizard.Page>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              validate={required}
            />
          </div>
          <Error name="email" />
          <div>
            <label>Zip Code</label>
            <Field
              name="zipcode"
              component="input"
              type="text"
              placeholder="Zip Code"
              validate={required}
            />
            <Error name="zipcode" />
          </div>
          <div>
            <label>Video consultation?</label>
            <Field name="videoconsultation" component="input" type="checkbox" />
            <div align="left">Yes</div>
          </div>
          <div>
            <label>Date of booking</label>
            {/* <Field
              name="Date"
              component="input"
              type="date"
              placeholder="Date"
            /> */}
            {/* <DatePicker selected={date}  onChange={(e)=>dateUpdate(e)}  /> */}
            
            <DatePicker
              onChange={(e)=>dateUpdate(e)} 
              value={moment(date).format("DD-MM-YYYY")}  
            />
            <Error name="email" />
          </div>
          <label>Session</label>
          <Field name="session" component="select">
            <option>Choose time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </Field>
          <Error name="session" />
        </Wizard.Page>
      </Wizard>
    </Styles>
  )
}
const WizardForm = withFirebase(WizardFormBase)

export default WizardForm

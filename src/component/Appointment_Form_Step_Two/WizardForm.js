import React, { useState } from "react"
import Styles from "./Styles"
import { Field } from "react-final-form"
import Wizard from "./Wizard"
import { withFirebase } from "../Firebase"
import * as ROUTES from "../../constants/routes"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

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

  function dateUpdate(event) {
    setDate(event)
  }

  function errorHandler() {
    setEmailError(
      <p>
        Email already exists please <a href={ROUTES.SIGNIN}>signin</a>
      </p>
    )
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
        initialValues={{ employed: true, stooge: "larry", date: new Date() }}
        firebase={props.firebase}
        date={date}
        emailPrompt={errorHandler}
        setdocID={setdocID}
        // onSubmit={onSubmit}
      >
        <Wizard.Page
          validate={values => {
            const errors = {}
            if (!values.type) {
              errors.type = "Required"
            }
            if (!values.gender) {
              errors.gender = "Required"
            }
            if (!values.petdate) {
              errors.age = "Required"
            }
            return errors
          }}
        >
          <div>
            <label>Name of Pet</label>
            <Field
              name="petname"
              component="input"
              type="text"
              date={date}
              placeholder="Tom"
              validate={required}
            />
          </div>
          <div>
            <label>What year was your pet born?</label>
            <DatePicker
              selected={date}
              vale={date}
              onChange={e => dateUpdate(e)}
            />
            <Error name="email" />
          </div>
          <div>
            <label>Type</label>
            <Field name="type" component="select">
              <option value="dog">Dog</option>
              <option value="cat">🍄 Cat</option>
              <option value="rabbit">🧀 Rabbit</option>
              <option value="bird">🐓 Bird</option>
              <option value="other">🍍 Other</option>
            </Field>
            <Error name="type" />
            <label>Gender</label>
            <Field name="gender" component="select">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <Error name="gender" />
          </div>
          <div>
            <label>
              Tell us more about your pet. Her breed, health issues etc.
            </label>
            <Field
              name="notes"
              type="text"
              placeholder="My dog is a Golden retriever..."
              component="input"
            />
          </div>
        </Wizard.Page>
      </Wizard>
    </Styles>
  )
}
const WizardForm2 = withFirebase(WizardFormBase)

export default WizardForm2

import React from "react"
import { Form } from "react-final-form"
import { withRouter } from "react-router-dom";

class WizardBase extends React.Component {
  static Page = ({ children }) => children

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {},
      docID: "",
    }
  }


  next = values => {
    console.log(values, this.props)
    this.props.firebase.fsdb
      .collection("form-inquiry")
      .doc(window.localStorage.getItem("dbDocID"))
      .update({
        customerDetails: {
          email: values["email"],
          zipcode: values["zipcode"],
        },
      })
    this.props.firebase.fsdb
      .collection("form-inquiry")
      .doc(window.localStorage.getItem("dbDocID"))
      .update({
        sessionDetails: {
          Date: this.props.date,
          session: `${values["session"]}`,
          videoconsultation: `${values["videoconsultation"]}`,
        },
      })
      .then(res => {
        this.props.history.push(`${this.props.match.url}/${values["zipcode"]}`)
      })
      .catch(rej => {
        console.log(rej)
        alert(rej)
      })
  }

  previous = () => this.props.history.goBack();

 
  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = (e, values) => {
    e.preventDefault()
    this.next(values)
  }

  render() {
    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form>
            {activePage}
            <div className="buttons">
              <button
                onClick={e => {
                  this.handleSubmit(e, values)
                }}
                disabled={submitting}
              >
                Next »
              </button>
            </div>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    )
  }
}

const Wizard = withRouter(WizardBase)

export default Wizard

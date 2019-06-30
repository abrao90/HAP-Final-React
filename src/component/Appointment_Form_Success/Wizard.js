import React from "react"
import { Form } from "react-final-form"
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

class WizardBase extends React.Component {
  static Page = ({ children }) => children

  componentDidMount(){
    setTimeout(()=>{
      this.props.history.push(ROUTES.BOOKING_VERIFICATION)
    },4000)
  }

 
  // next = values => {
  //   this.props.firebase.fsdb
  //     .collection(
  //       `userCollection/${
  //         this.props.firebase.auth.currentUser.uid
  //       }/appointments/`
  //     )
  //     .doc(window.localStorage.getItem("dbDocID"))
  //     .update({
  //       petDetails: {
  //         petdate: `${this.props.date}`,
  //         petname: `${values["petname"]}`,
  //         type: `${values["type"]}` ,
  //         gender: `${values["gender"]}`,
  //         notes: `${values["notes"]}`,
  //       }
  //     })
  //     .then(res => {
  //       // this.props.history.push(`/:service/${values["zipcode"]}`)
  //       this.props.history.push(`/${window.localStorage.getItem('urlParam')}/${window.localStorage.getItem('zipcode')}/success`)
  //     })
  //     .catch(rej => {
  //       console.log(rej)
  //       alert(rej)
  //     })
  // }



  // previous = () => this.props.history.goBack();

  // /**
  //  * NOTE: Both validate and handleSubmit switching are implemented
  //  * here because 🏁 Redux Final Form does not accept changes to those
  //  * functions once the form has been defined.
  //  */

  // validate = values => {
  //   const activePage = React.Children.toArray(this.props.children)[
  //     this.state.page
  //   ]
  //   return activePage.props.validate ? activePage.props.validate(values) : {}
  // }

  // handleSubmit = (e,values) => {
  //   e.preventDefault(); 
  //   const { children } = this.props
  //   const { page } = this.state
  //   this.next(values)
  // }

  render() {
    // const { children } = this.props
    // const { page, values } = this.state
    // const activePage = React.Children.toArray(children)[page]
    // // const isLastPage = page === React.Children.count(children) - 1
    // // console.log(this.props)
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form>
            {/* <div className="buttons"> */}
                {/* <button type="button" onClick={this.previous}> */}
                  {/* « Previous */}
                {/* </button> */}
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
            {/* </div>  */}

            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      </Form>
    )
  }
}


const Wizard = withRouter(WizardBase);

export default Wizard;
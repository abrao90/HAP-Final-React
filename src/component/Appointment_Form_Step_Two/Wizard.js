import React from "react";
import { Form } from "react-final-form";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class WizardBase extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
      docID: ""
    };
  }

  componentDidMount() {
    if (window.localStorage.getItem("dbDocID") === null) {
      window.location.replace("/");
    }
  }

  next = values => {
    this.props.firebase.fsdb
      .collection("form-inquiry")
      .doc(window.localStorage.getItem("dbDocID"))
      .update({
        petDetails: {
          petdate: `${this.props.date}`,
          petname: `${values["petname"]}`,
          type: `${values["type"]}`,
          gender: `${values["gender"]}`,
          notes: `${values["notes"]}`
        }
      })
      .then(res => {
        window.localStorage.removeItem("dbDocID");
        this.props.history.push(`${this.props.match.url}${ROUTES.SUCCESS}`);
      })
      .catch(rej => {
        console.log(rej);
        alert(rej);
      });
  };

  previous = () => this.props.history.goBack();
  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (e, values) => {
    e.preventDefault();
    this.next(values);
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
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
              <button type="button" onClick={this.previous}>
                « Previous
              </button>
              <button
                type="submit"
                onClick={e => this.handleSubmit(e, values)}
                disabled={submitting}
              >
                Submit
              </button>
            </div>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    );
  }
}

const Wizard = withRouter(WizardBase);

export default Wizard;

import React, { Component } from "react"
import Box from "../../elements/Box"
import {
  SearchWrapper,
  List,
} from "../../common/src/containers/Hosting/Banner/banner.style"
import { withFirebase } from "../Firebase"
import Link from "next/link"
import Icon from "react-icons-kit"
import Button from "../../elements/Button"
import Input from "../../elements/Input"
import Select from "../../elements/Select"
import { book,  } from "react-icons-kit/feather/"
import { confirmAlert } from "react-confirm-alert"
import { withRouter } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css"
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'


const INITIAL_STATE = {
  name: "",
  phone: "",
  zipcode: "",
  service: "",
  code: "",
  error: "",
}

class HomeSearchBase extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  // componentWillMount(){
  //  const values =  window.localStorage.getItem('homeSearch')
  //  console.log(values)
  // //  if(values){
  // //    this.setState({
  // //     name: values.customerDetails.name,
  // //     phone:  values.customerDetails.phone,
  // //     zipcode: "" ,
  // //     service: values.sessionDetails.service,
  // //     code: "",
  // //     error: "",
  // //    })
  // //  }
  // }

  onChangeName = event => {
    this.setState({
      name: event,
    })
  }

  onChangePhone = event => {
    this.setState({
      phone: event,
    })
  }

  onChangeCode = event => {
    this.setState({
      zipcode: event,
    })
  }

  onChangeService = event => {
    this.setState({
      service: event,
    })
  }

  onChangeOTP = event => {
    this.setState(
      {
        code: event,
      },
      () => {
        console.log(this.state)
      }
    )
  }

  onSubmit = () => {
    // event.preventDefault()
    // window.recaptchaVerifier = new this.props.firebase.recaptcha.RecaptchaVerifier(
    //   "recaptcha-container",
    //   {
    //     size: "normal",
    //   }
    // )
    // const phoneNumber = this.state.phone
    // const appVerifier = window.recaptchaVerifier
    // this.props.firebase
    //   .doCreateUserWithPhone(phoneNumber, appVerifier)
    //   .then(confirmationResult => {
    //   alert('.')
    //   const code = prompt('ENTER OTP CODE')
    //    confirmationResult.confirm(code)
    //    .then((results)=>{
    //     console.log(results);
    //     this.props.firebase
    //     .user(results.user.uid)
    //     .set(
    //       {
    //         name: this.state.name,
    //         phone: this.state.phone,
    //         email: "",
    //         userrole: "customer",
    //         zipcode: "",                
    //       },
    //       { merge: true }
    //     )
    //     .then(() => {
    //       this.props.firebase
    //         .user(this.props.firebase.auth.currentUser.uid)
    //         .collection("appointments")
    //         .add({
    //           customerDetails: {
    //             name: this.state.name,
    //             phone: this.state.phone,
    //             service: this.state.service,
    //           },
    //           sessionDetails: {
    //             Date: "",
    //             session: "",
    //             videoconsultation: "",
    //           },
    //           petDetails: {
    //             petdate: "",
    //             type: "",
    //             gender: "",
    //             notes: "",
    //           },
    //         })
    //         .then(res => {
    //           window.localStorage.setItem('dbDocID', res.id)
    //           this.props.history.push(`/${this.state.service.value}`)
    //         })  
    //         .catch(rej => {
    //           console.log(rej)
    //           alert(rej.message)
    //         })
    //     })
    //    })
    //   })
    //   .catch(function(error) {
    //     alert(error.message)
    //     console.log("error", error)
    //     window.localStorage.removeItem('dbDocID')
    //     window.recaptchaVerifier.clear();
    //   })

    //   event.preventDefault()
    // window.recaptchaVerifier = new this.props.firebase.recaptcha.RecaptchaVerifier(
    //   "recaptcha-container",
    //   {
    //     size: "normal",
    //   }
    // )
    // const phoneNumber = this.state.phone
    // const appVerifier = window.recaptchaVerifier
    // this.props.firebase
    //   .doCreateUserWithPhone(phoneNumber, appVerifier)
    //   .then(confirmationResult => {
    //     alert('.')
    //     const code = prompt('ENTER OTP CODE')
    //      confirmationResult.confirm(code)
    //    .then((results)=>{
    //      console.log(results.user.uid);
    //     this.props.firebase
    //     .user(results.user.uid)
    //     .set(
    //       {
    //         name: this.state.name,
    //         phone: this.state.phone,
    //         userrole: "customer",
    //         zipcode: "",
    //         email: ''

    //       },
    //       { merge: true }
    //     )
    //     .then(() => {
    //       this.props.firebase
    //         .user(results.user.uid)
    //         .collection("appointments")
    //         .add({
    //           sessionDetails: {
    //             Date: "",
    //             session: "",
    //             videoconsultation: "",
    //           },
    //           petDetails: {
    //             petdate: "",
    //             type: "",
    //             gender: "",
    //             notes: "",
    //           },
    //         })
    //         .then(res => {
    //           window.localStorage.setItem('dbDocID', res.id)
    //           window.localStorage.setItem('urlParam', this.state.service.value)              
    //         }).then(()=>{
    //           this.props.history.push(`/${this.state.service.value}`)
    //         })
    //         .catch(rej => {
    //           console.log(rej)
    //           alert(rej)
    //         })
    //     })
    //    })
    //   })
    //   .catch(function(error) {
    //     alert(error.message)
    //     console.log("error", error)
    //     window.localStorage.removeItem('dbDocID')
    //     window.recaptchaVerifier.clear();
    //   })

    this.props.firebase.fsdb
    .collection("form-inquiry")
    .add(
      {
        customerDetails: {
          name: `${this.state.name}`,
          zipcode: "",
          phone: `${this.state.phone}`,
          email: "",
          service: `${this.state.service.value}`,
        },
        vetDetails:{
          isVetAssigned: false,
          vetName: "",
        },
        sessionDetails: {
          Date: "",
          session: "",
          videoconsultation: "",
        },
        petDetails: {
          petdate: "",
          petname: "",
          type: "",
          gender: "",
          notes: "",
        },
        bookingStatus:{
          phoneVerfication: false,
          status: "Not confirmed"
        }
      }
    )
    .then(res => {
        window.localStorage.setItem('dbDocID', res.id)
      })
      .then(()=>{
        this.props.history.push(`/${this.state.service.value}`)
      })
      .catch(rej => {
        console.log(rej)
        alert(rej)
      })

  }

 OTPpopUp = () => {
    confirmAlert({
      title: "Verification",
      message: "Please Enter OTP Code",
      childrenElement: () => <div />,
      customUI: ({ title, message, onClose }) => (
        <div style={{ textAlign: "center" }}>
          <h1>{title}</h1>
          <h5>{message}</h5>
          <div>
            <Input
              inputType="text"
              onChange={this.onChangeOTP}
              placeholder="OTP code"
              iconPosition="right"
              className="domain_search_input"
              aria-label="domain_search_input"
            />
          </div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            <Button
              {...this.props.button}
              onClick={() => {
                onClose()
              }}
              title="Submit"
              className="domain_search_button"
            />
          </div>
        </div>
      ),
    })
  }

  render() {
    const { name , phone, service } = this.state;
    const isInvalid =
    name === '' ||
    phone === '' ||
    service === '';

    return (
      <Box {...this.props.searchArea}>
        <SearchWrapper>
          <Input
            inputType="text"
            placeholder="Your name"
            onChange={this.onChangeName}
            iconPosition="right"
            className="domain_search_input"
            aria-label="domain_search_input"
          />
          <ReactPhoneInput
            defaultCountry="de"
            value={this.state.phone}
            onChange={this.onChangePhone}
          />
          <div style={{marginTop: "10px"}}>
          <Select
            options={this.props.DOMAIN_NAMES}
            placeholder="Service"
            onChange={this.onChangeService}
            className="domain_search_select"
            aria-label="domain_search_input"
          />
          </div>
          <Button
            {...this.props.button}
            onClick={()=>{ 
              if(isInvalid === false){
                this.onSubmit()
              }else{
                alert("Please Fill all the feilds")
              }
            }}
            icon={<Icon icon={book} size={24} />}
            className="domain_search_button"
          />
        </SearchWrapper>
        <List>
          {this.props.DOMAIN_PRICE.map((item, index) => (
            <li key={`domain-list-${index}`}>
              {item.url ? (
                <Link href={item.url}>
                  <a>{item.content}</a>
                </Link>
              ) : (
                <>{item.content}</>
              )}
            </li>
          ))}
        </List>
    <p id="recaptcha-container" style={{textAlign: "center"}}></p>

      </Box>
    )
  }
}

const HomeSearch = withFirebase(withRouter(HomeSearchBase))

export default HomeSearch

// <Box {...searchArea}>
//             <SearchWrapper>
//               <Input
//                 inputType="text"
//                 placeholder="Your name"
//                 iconPosition="right"
//                 className="domain_search_input"
//                 aria-label="domain_search_input"
//               />
//               <Input
//                 inputType="text"
//                 placeholder="Phone number"
//                 iconPosition="right"
//                 className="domain_search_input"
//                 aria-label="domain_search_input"
//               />
//               <Input
//                 inputType="text"
//                 placeholder="Zipcode"
//                 iconPosition="right"
//                 className="domain_search_input"
//                 aria-label="domain_search_input"
//               />
//               <Select
//                 options={DOMAIN_NAMES}
//                 placeholder="Service"
//                 className="domain_search_select"
//                 aria-label="domain_search_input"
//               />
//               <Button
//                 {...button}
//                 icon={<Icon icon={search} size={24} />}
//                 className="domain_search_button"
//               />
//             </SearchWrapper>
//             <List>
//               {DOMAIN_PRICE.map((item, index) => (
//                 <li key={`domain-list-${index}`}>
//                   {item.url ? (
//                     <Link href={item.url}>
//                       <a>{item.content}</a>
//                     </Link>
//                   ) : (
//                     <>{item.content}</>
//                   )}
//                 </li>
//               ))}
//             </List>
//           </Box>

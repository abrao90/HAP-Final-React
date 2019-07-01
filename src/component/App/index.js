import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "../Session";
import * as ROUTE from "../../constants/routes";
import Footer from "../../common/src/containers/Hosting/Footer";
import { DrawerProvider } from "../../common/src/contexts/DrawerContext";
import { ParallaxProvider } from "react-scroll-parallax";
import Landing from "../Landing_Page";
import { SignIn } from "../Sign_In";
import { SignUp } from "../Sign_Up";
import AccountSettings from "../Account_Settings";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { hostingTheme } from "../../common/src/theme/hosting";
import {
  GlobalStyle,
  ContentWrapper
} from "../../common/src/containers/Hosting/hosting.style";
import { ResetCSS } from "../../common/src/assets/css/style";
import Navbar from "../../common/src/containers/Hosting/Navbar";
import Dashboard from "../Dashboard";
import { ForgotPassword } from "../Forgot_Password";
import Admin from "../Admin";
import Admin_SignIn from "../Admin_SignIn";
import Vet from "../Vet";
import Vet_Sign_In from "../Vet_Sign_In";
import Vet_Sign_Up from "../Vet_Sign_Up";
import SignInOptPage from "../Sign_In_Options";
import BookAnAppointment from "../Book_An_Appointment";
import VideoComponent from "../Video_Component";
import WizardForm5 from "../Appointment_Form_Step_Four/WizardForm";
import WizardForm4 from "../Appointment_Form_Step_Three/WizardForm";
import WizardForm3 from "../Appointment_Form_Success/WizardForm";
import AppointmentDetails from '../Appointment_Details'
class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={hostingTheme}>
          <ParallaxProvider>
            <Head>
              <title>Hosting | A react next landing page</title>
              <meta name="Description" content="React next landing page" />
              <meta name="theme-color" content="#eb4d4b" />
              <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
                rel="stylesheet"
              />
            </Head>
            <ResetCSS />
            <GlobalStyle />
            <ContentWrapper>
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>
              <Route path={ROUTE.LANDING} exact component={Landing} />
              <Route path={`${ROUTE.ADMIN}/:docid`} exact component={AppointmentDetails} />
              <Route path={ROUTE.VIDEO_COMPONENT} component={VideoComponent} />
              <Route path={ROUTE.SIGNIN_OPTIONS} component={SignInOptPage} />
              <Route path={ROUTE.ADMIN}  exact component={Admin} />
              <Route path={ROUTE.ADMIN_SIGNIN} component={Admin_SignIn} />
              <Route path={ROUTE.SIGNIN} component={SignIn} />
              <Route
                exact
                path={ROUTE.BOOKING_VERIFICATION}
                component={WizardForm4}
              />
              <Route
                exact
                path={`${ROUTE.BOOKING_VERIFICATION}/opt-successfully-verified`}
                component={WizardForm5}
              />
              
              <Route
                exact
                path={`${ROUTE.BOOKING_VERIFICATION}/opt-successfully-verified/success`}
                component={WizardForm3}
              />


              <Route path={ROUTE.VET} component={Vet} />
              <Route path={ROUTE.VET_SIGNIN} component={Vet_Sign_In} />
              <Route path={ROUTE.VET_SIGNUP} component={Vet_Sign_Up} />
              <Route path={ROUTE.SIGNUP} component={SignUp} />
              <Route path={ROUTE.DASHBOARD} component={Dashboard} />
              <Route
                path={ROUTE.BOOK_AN_APPOINTMENT}
                component={BookAnAppointment}
              />
              <Route
                path={ROUTE.ACCOUNT_SETTINGS}
                exact
                component={AccountSettings}
              />
              <Route
                path={ROUTE.FORGET_PASSWORD}
                exact
                component={ForgotPassword}
              />
              <Footer />
            </ContentWrapper>
          </ParallaxProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default withAuthentication(App);

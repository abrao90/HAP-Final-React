import app from 'firebase/app';
import 'firebase/auth';

import 'firebase/firestore';

var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_APP_ID
  };

class Firebase {
  constructor() {
    app.initializeApp(config);
    // this.serverValue = app.database.ServerValue
    this.emailAuthProvider = app.auth.EmailAuthProvider
    this.recaptcha = app.auth
    this.auth = app.auth()
    // this.db = app.database()
    this.fsdb = app.firestore()
  }

  doCheckExistenceWithEmail = (email) =>
  this.auth.fetchSignInMethodsForEmail(email)
  

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  doCreateUserWithPhone = (number , captcha) =>  this.auth.signInWithPhoneNumber(number, captcha)

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
     
      if (authUser) {
        this.users(authUser.uid)
          .get()
          .then(doc => {
            var dbUser  = doc.data().userrole;
            // default empty roles
            if (!dbUser) {
              dbUser = false
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              userrole: dbUser,
            }
            next(authUser)
          })
      } else {
        if (authUser) {
           fallback(authUser)
        }else{
           fallback()
        }
      }
    })

  user = uid => this.fsdb.doc(`userCollection/${uid}`)
  users = uid => this.fsdb.collection('userCollection').doc(uid);
}

export default Firebase;
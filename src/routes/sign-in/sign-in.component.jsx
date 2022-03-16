/* import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth' */

import {
  auth,
  signInWithGooglePopup,
  /* signInWithGoogleRedirect, */
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  /*   useEffect(async () => {
    const response = await getRedirectResult(auth)
    console.log(response)

  }, []) */

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/*    <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUp />
    </div>
  );
};

export default SignIn;
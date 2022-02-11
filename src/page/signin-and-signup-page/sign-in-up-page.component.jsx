import React from "react";

import './sign-in-up-page.styles.css';
import SignIn from "../../component/sign-in.component/sign-in.component";
import Signup from "../../component/sign-up-component/sign-up.component";

const SignInAndSignUpPage = ()=>(
  <div className="sign-in-sign-up">
    <SignIn/>
    <Signup/>
  </div>
);

export default SignInAndSignUpPage;
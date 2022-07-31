import React from "react";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";

export default function Authentication() {
  return (
    <AuthenticationContainer className="authentication-container">
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}

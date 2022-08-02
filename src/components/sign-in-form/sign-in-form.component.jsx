import React from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import { useDispatch } from "react-redux/es/exports";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

export default function SignIn() {
  const dispatch = useDispatch();
  const defaultFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = React.useState(defaultFormData);
  const [formError, setFormError] = React.useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(formData.email, formData.password));
      setFormData(defaultFormData);
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setFormError("Invalid Email/Password");
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: "",
        }));
      } else {
        console.log("Sign in error", error);
      }
    }
  };
  return (
    <SignInContainer className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in using your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label={"Email Address"}
          type="email"
          required
          id={"emailSignIn"}
          autoComplete="username"
          name="email"
          onChange={handleFormChange}
          value={formData.email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          id={"passwordSignIn"}
          autoComplete="password"
          name="password"
          onChange={handleFormChange}
          value={formData.password}
        />
        <ButtonsContainer className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
      {formError && <p>{formError}</p>}
    </SignInContainer>
  );
}

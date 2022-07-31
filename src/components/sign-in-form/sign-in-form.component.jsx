import React from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

export default function SignIn() {
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
    await signInWithGooglePopup();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(formData.email, formData.password);
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
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
      {formError && <p>{formError}</p>}
    </div>
  );
}

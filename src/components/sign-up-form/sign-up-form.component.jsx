import React from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch } from "react-redux/es/exports";
import { signUpStart } from "../../store/user/user.action";

export default function SignUp() {
  const defaultFormData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState(defaultFormData);
  const [formError, setFormError] = React.useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if password is at least 6
    if (formData.password.length <= 5) {
      setFormError("Passwords must be at least 6 characters");
      return;
    }
    // Check if password and confirm password matches
    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords must match");
      return;
    }
    try {
      // Authenticate user
      dispatch(
        signUpStart(formData.email, formData.password, formData.displayName)
      );
      // Create user document

      // setFormError("Sign up success!");
      setFormData(defaultFormData);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return setFormError("A User with that email already exists");
      }
      if (error.code === "auth/invalid-email") {
        return setFormError("Please enter a valid email address");
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label={"Display Name"}
          id="displayName"
          type="text"
          required
          name="displayName"
          onChange={handleFormChange}
          value={formData.displayName}
        />

        <FormInput
          label={"Email Address"}
          type="email"
          id="email"
          required
          autoComplete="username"
          name="email"
          onChange={handleFormChange}
          value={formData.email}
        />

        <FormInput
          label={"Password"}
          type="password"
          id="password"
          required
          autoComplete="new-password"
          name="password"
          onChange={handleFormChange}
          value={formData.password}
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          id="password2"
          required
          autoComplete="new-password"
          name="confirmPassword"
          onChange={handleFormChange}
          value={formData.confirmPassword}
        />
        <Button children={"Submit"} type="submit" />
      </form>
      {formError && <p>{formError}</p>}
    </SignUpContainer>
  );
}

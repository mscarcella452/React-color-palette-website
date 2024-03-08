import { useContext, useEffect } from "react";
import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import { useToggle } from "../../../Hooks/CustomHooks";
import { useEmailInput, usePasswordInput } from "../Hooks/InputCustomHooks";
import { Typography, Button, Box, IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FormInput from "./FormInput";

function LogInForm({ handleClose }) {
  const [isEmailValid, emailRef, emailError] = useEmailInput();
  const [isPasswordValid, passwordRef, passwordError, setPasswordError] =
    usePasswordInput();
  const [rememberMe, toggleRememberMe] = useToggle(true);
  const { users } = useContext(UIContext);
  const UIDispatch = useContext(UIDispatchContext);
  const { storedLogIn } = useContext(UIContext);

  const inputs = [
    { inputName: "email", ref: emailRef, errror: emailError },
    { inputName: "password", ref: passwordRef, errror: passwordError },
  ];

  useEffect(() => {
    // set stored log in credentials from remember me
    emailRef.current.value = storedLogIn["email"];
    passwordRef.current.value = storedLogIn["password"];
  });

  const handleSubmit = () => {
    // Validate fields and update error states
    const emailValid = isEmailValid("Log In");
    const passwordValid = isPasswordValid();

    // Check if all error states are false
    if (emailValid && passwordValid) {
      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value.trim();

      const foundUser = users.filter(
        user => user.email.toUpperCase() === email.toUpperCase()
      )[0];
      // Check if password matches email
      if (foundUser.password.toUpperCase() !== password.toUpperCase()) {
        setPasswordError(
          "Incorrect password. Please check your password and try again."
        );
        return;
      }

      UIDispatch({
        type: "log_in",
        userInfo: foundUser,
        rememberMe: rememberMe,
      });
      handleClose();
    }
  };

  return (
    <>
      {/* <Typography variant='label'>Welcome Back!</Typography> */}
      <Typography
        variant='subHeading1'
        sx={{ fontWeight: 600, marginBottom: 1, color: "info.dark" }}
      >
        Sign In to Your Account
      </Typography>

      {inputs.map(input => (
        <FormInput
          key={input.inputName}
          inputName={input.inputName}
          forwardedRef={input.ref}
          error={input.errror}
        />
      ))}

      <Box className='flexRow' justifyContent='space-between'>
        <Box
          className='flexRow'
          sx={{ width: 1, gap: 1, justifyContent: "flex-Start" }}
        >
          <IconButton onClick={toggleRememberMe} sx={{ color: "info.main" }}>
            {rememberMe ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </IconButton>

          <Typography variant='label'>Remember Me</Typography>
        </Box>
        <Button onClick={() => console.log("forget password")} variant='label'>
          Forgot Password?
        </Button>
      </Box>
      <Button variant='primary' sx={{ width: 1 }} onClick={handleSubmit}>
        Log In
      </Button>
    </>
  );
}

export default LogInForm;

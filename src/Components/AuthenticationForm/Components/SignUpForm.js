import { useContext } from "react";
import { UIDispatchContext } from "../../../Context/AppContext";
import { useToggle } from "../../../Hooks/CustomHooks";
import {
  useUsernameInput,
  useEmailInput,
  usePasswordInput,
} from "../Hooks/InputCustomHooks";
import { Typography, Button, Box, IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FormInput from "./FormInput";

function SignUpForm({ handleClose }) {
  const [isUsernameValid, usernameRef, usernameError] = useUsernameInput();
  const [isEmailValid, emailRef, emailError] = useEmailInput();
  const [isPasswordValid, passwordRef, passwordError] = usePasswordInput();
  const [rememberMe, toggleRememberMe] = useToggle(true);
  const UIDispatch = useContext(UIDispatchContext);

  const inputs = [
    { inputName: "username", ref: usernameRef, errror: usernameError },
    { inputName: "email", ref: emailRef, errror: emailError },
    { inputName: "password", ref: passwordRef, errror: passwordError },
  ];

  const handleSubmit = () => {
    // Validate fields and update error states
    const usernameValid = isUsernameValid();
    const emailValid = isEmailValid("Sign Up");
    const passwordValid = isPasswordValid("Sign Up");

    // Check if all error states are false
    if (usernameValid && emailValid && passwordValid) {
      const userInfo = {
        username: usernameRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
      };

      UIDispatch({
        type: "sign_up",
        userInfo: userInfo,
        rememberMe: rememberMe,
      });

      handleClose();
    }
  };

  return (
    <>
      <Typography
        variant='subHeading1'
        sx={{ fontWeight: 600, marginBottom: 1, color: "info.dark" }}
      >
        Create Your Account
      </Typography>

      {inputs.map(input => (
        <FormInput
          key={input.inputName}
          inputName={input.inputName}
          forwardedRef={input.ref}
          error={input.errror}
        />
      ))}

      <Box
        className='flexRow'
        sx={{ width: 1, gap: 1, justifyContent: "flex-Start" }}
      >
        <IconButton onClick={toggleRememberMe} sx={{ color: "info.main" }}>
          {rememberMe ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>

        <Typography variant='label'>Remember Me</Typography>
      </Box>
      <Button variant='primary' sx={{ width: 1 }} onClick={handleSubmit}>
        Sign Up
      </Button>
    </>
  );
}

export default SignUpForm;

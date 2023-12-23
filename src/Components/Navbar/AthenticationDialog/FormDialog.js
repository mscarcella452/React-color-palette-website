import { useState, useContext, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { Typography, Button, Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import RememberMeToggle from "./RememberMeToggle";
import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import { FormContext, FormDispatchContext } from "../../../Context/FormContext";
import AuthenticationInput from "./AuthenticationInput";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import DialogWrapper from "./DialogWrapper";

const navButtons = [
  { name: "Sign Up", btnVariant: "primary", dialogVariant: "signUp" },
  { name: "Log In", btnVariant: "secondary", dialogVariant: "logIn" },
];

const defaultSignUp = {
  username: "",
  email: "",
  password: "",
  // repeatPassword: "",
};

const signUpInputs = ["username", "email", "password"];

const formData = {
  signUp: {
    formTitle: "Sign Up",
    buttonVariant: "primary",
    inputs: ["username", "email", "password"],
    inputValues: {
      username: "",
      email: "",
      password: "",
    },
    disableValues: {
      username: true,
      email: true,
      password: true,
    },
    onSubmitErrors: {
      username: { status: false, message: "" },
      email: { status: false, message: "" },
      password: { status: false, message: "" },
    },
  },
  logIn: {
    formTitle: "Log In",
    buttonVariant: "secondary",
    inputs: ["email", "password"],
    inputValues: {
      email: "",
      password: "",
    },
    disableValues: {
      email: true,
      password: true,
    },
    onSubmitErrors: {
      email: { status: false, message: "" },
      password: { status: false, message: "" },
    },
  },
};

function FormDialog({ variant, buttonHeight, navBarSm }) {
  const {
    inputs,
    inputValues,
    disableValues,
    formTitle,
    onSubmitErrors,
    buttonVariant,
  } = formData[variant];

  // const { disableSubmit } = useContext(FormContext);
  // const FormDispatch = useContext(FormDispatchContext);
  const { users } = useContext(UIContext);
  const UIDispatch = useContext(UIDispatchContext);
  const [open, setOpen] = useState(false);
  const [formInputs, setFormInputs] = useState(inputValues);
  const [disableSubmit, setDisableSubmit] = useState(disableValues);
  const [submitError, setSubmitError] = useState(onSubmitErrors);

  const handleOpen = () => {
    setOpen(true);
    setFormInputs(inputValues);
    setDisableSubmit(disableValues);
    setSubmitError(onSubmitErrors);
  };

  const handleClose = () => setOpen(false);

  const checkDisabled = () => Object.values(disableSubmit).includes(true);

  const handleUpdateForm = (name, inputValue, disableValue) => {
    submitError[name].status &&
      setSubmitError(prev => ({
        ...prev,
        [name]: { stauts: false, message: "" },
      }));
    setFormInputs(prevData => ({
      ...prevData,
      [name]: inputValue,
    }));

    setDisableSubmit(prevData => ({
      ...prevData,
      [name]: disableValue,
    }));
  };

  const handleLogIn = () => {
    setSubmitError(onSubmitErrors);
    const { email } = formInputs;
    const validEmail = emailMatchValidator(users, email, setSubmitError);

    if (validEmail) {
      const validPassword = passwordMatchValidator(
        users,
        formInputs,
        setSubmitError
      );
      if (validPassword) {
        // logs in returning user
        UIDispatch({ type: "log_in", email: email });
        handleClose();
      }
    }
  };

  const handleSignUp = () => {
    // adds new user to total users in appContext
    UIDispatch({
      type: "sign_up",
      newUser: {
        username: formInputs.username,
        email: formInputs.email,
        password: formInputs.password,
      },
    });

    handleClose();
  };

  const handleSubmit = e => {
    variant === "logIn" && handleLogIn();
    variant === "signUp" && handleSignUp();
  };

  return (
    <>
      {navBarSm ? (
        <IconButton onClick={handleOpen}>
          <AccountCircleIcon />
        </IconButton>
      ) : (
        <Button
          variant={buttonVariant}
          onClick={handleOpen}
          size='small'
          sx={{ height: buttonHeight }}
        >
          {formTitle}
        </Button>
      )}
      <DialogWrapper handleClose={handleClose} open={open}>
        <Typography
          variant='heading1'
          sx={{ fontWeight: 600, fontSize: "1.5rem" }}
        >
          {formTitle}
        </Typography>
        <Grid container columns={1} spacing={2}>
          {inputs.map((input, index) => (
            <Grid xxs={1} key={index}>
              <AuthenticationInput
                handleUpdateForm={handleUpdateForm}
                inputProps={{
                  formVariant: variant,
                  formOpen: open,
                  inputName: input,
                  initialInputValue: formInputs[input],
                }}
                submitError={submitError[input]}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant='primary'
          onClick={handleSubmit}
          // disabled={false}
          disabled={checkDisabled()}
          sx={{ width: 1, "&:hover": { boxShadow: 1 } }}
        >
          {formTitle}
        </Button>

        <Box
          className='flexRow'
          justifyContent='space-between'
          sx={{ width: 1 }}
        >
          <RememberMeToggle />
        </Box>
      </DialogWrapper>
    </>
  );
}

export default FormDialog;

function emailMatchValidator(users, email, setSubmit) {
  const emailExists = users.some(
    user => user.email.toUpperCase() === email.toUpperCase()
  );
  console.log(emailExists, users, email);
  let newState;
  emailExists
    ? (newState = { status: false, message: "" })
    : (newState = {
        status: true,
        message: "The email address you entered does not match any records.",
      });

  setTimeout(() => setSubmit(prev => ({ ...prev, email: newState })), 500);

  return !newState.status;
}

function passwordMatchValidator(users, formInputs, setSubmit) {
  const { email, password } = formInputs;
  const storedUser = users.filter(
    user => user.email.toUpperCase() === email.toUpperCase()
  );
  let newState;
  storedUser[0].password === password
    ? (newState = { status: false, message: "" })
    : (newState = {
        status: true,
        message: "The password you entered does not match the email on file.",
      });

  setTimeout(() => setSubmit(prev => ({ ...prev, password: newState })), 500);

  return !newState.status;
}

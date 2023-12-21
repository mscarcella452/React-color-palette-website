import { useState, useContext, useEffect, useCallback } from "react";

import { Typography, Button, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import RememberMeToggle from "./RememberMeToggle";
import { UIDispatchContext } from "../../../Context/AppContext";
import { FormContext, FormDispatchContext } from "../../../Context/FormContext";
import AuthenticationInput from "./AuthenticationInput";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import DialogWrapper from "./DialogWrapper";

const navButtons = [
  { name: "Sign Up", btnVariant: "primary", dialogVariant: "signUp" },
  { name: "Log In", btnVariant: "secondary", dialogVariant: "logIn" },
];

const defaultSignUp = {
  Username: "",
  Email: "",
  Password: "",
  // repeatPassword: "",
};

const signUpInputs = ["Username", "Email", "Password"];

function SignUpAuthentication() {
  // const { disableSubmit } = useContext(FormContext);
  const FormDispatch = useContext(FormDispatchContext);
  const UIDispatch = useContext(UIDispatchContext);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState(defaultSignUp);

  const handleOpen = () => {
    setOpen(true);
    setNewUser(defaultSignUp);
    // FormDispatch({ type: "toggle_form_open" });
    // FormDispatch({ type: "reset_disable_submit", Username: true });
  };
  const handleClose = () => setOpen(false);

  // const checkDisabled = () => Object.values(disableSubmit).includes(true);

  const handleUpdateForm = (name, value) =>
    setNewUser(prevData => ({
      ...prevData,
      [name]: value,
    }));

  const handleSignUp = e => {
    e.preventDefault();
    const { Username, Email, Password } = newUser;
    UIDispatch({
      type: "sign_up",
      newUser: {
        username: Username,
        email: Email,
        password: Password,
      },
    });

    handleClose();
  };

  return (
    <>
      <Button
        variant={"primary"}
        onClick={handleOpen}
        sx={{ width: 1, height: 1 }}
      >
        Sign Up
      </Button>
      <DialogWrapper handleClose={handleClose} open={open}>
        <Typography
          variant='heading1'
          sx={{ fontWeight: 600, fontSize: "1.5rem" }}
        >
          Sign Up
        </Typography>
        <Grid container columns={1} spacing={1.5}>
          {signUpInputs.map(input => (
            <Grid xxs={1}>
              <AuthenticationInput
                handleUpdateForm={handleUpdateForm}
                initialValue={newUser[input]}
                variant={input}
                formOpen={open}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant='primary'
          onClick={handleSignUp}
          disabled={false}
          // disabled={checkDisabled()}
          sx={{ width: 1, "&:hover": { boxShadow: 1 } }}
        >
          Sign Up
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

export default SignUpAuthentication;

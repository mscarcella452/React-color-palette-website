import { useState, useContext, useEffect } from "react";

import { Typography, Button, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import InputGrid from "./InputGrid";
import RememberMeToggle from "./RememberMeToggle";
import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import AuthenticationInput from "./AuthenticationInput";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const navButtons = [
  { name: "Sign Up", btnVariant: "primary", dialogVariant: "signUp" },
  { name: "Log In", btnVariant: "secondary", dialogVariant: "logIn" },
];

const defaultSignUp = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const signUpInputs = ["username", "email", "password", "repeatPassword"];

function SignUpAuthentication({ dialogOpen, handleClose }) {
  const UIDispatch = useContext(UIDispatchContext);
  const [newUser, setNewUser] = useState(defaultSignUp);

  const handleUpdateForm = e => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = e => {
    e.preventDefault();
    const { username, email, password } = newUser;

    UIDispatch({
      type: "sign_up",
      newUser: {
        username: username,
        email: email,
        password: password,
      },
    });

    handleClose();
  };

  useEffect(() => {
    dialogOpen && setNewUser(defaultSignUp);
  }, [dialogOpen]);

  return (
    <>
      <Typography
        variant='heading1'
        sx={{ fontWeight: 600, fontSize: "1.5rem" }}
      >
        Sign Up
      </Typography>
      <Grid container columns={1} spacing={1}>
        {signUpInputs.map(input => (
          <Grid xxs={1} sx={{ height: "55px" }}>
            <AuthenticationInput
              variant={input}
              value={newUser[input]}
              onInputChange={handleUpdateForm}
            />
          </Grid>
        ))}

        <Grid xxs={1}>
          <Typography
            sx={{ height: 1, textDecoration: "underline", height: "25px" }}
          >
            Forget Password
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant='primary'
        onClick={handleSignUp}
        sx={{ width: 1, "&:hover": { boxShadow: 1 } }}
      >
        Sign Up
      </Button>
      <RememberMeToggle />
    </>
  );
}

export default SignUpAuthentication;

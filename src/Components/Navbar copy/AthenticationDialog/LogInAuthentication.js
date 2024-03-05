import { useState, useContext, useEffect } from "react";

import { Typography, Button, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import RememberMeToggle from "./RememberMeToggle";
import { UIDispatchContext } from "../../../Context/AppContext";
import { FormContext, FormDispatchContext } from "../../../Context/FormContext";
import AuthenticationInput from "./AuthenticationInput";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
const navButtons = [
  { name: "Sign Up", btnVariant: "primary", dialogVariant: "signUp" },
  { name: "Log In", btnVariant: "secondary", dialogVariant: "logIn" },
];

const logInInputs = ["Email", "Password"];

const initialForm = { Email: "", Password: "" };

function LogInAuthentication({ dialogOpen, handleClose }) {
  const { disableSubmit } = useContext(FormContext);
  const FormDispatch = useContext(FormDispatchContext);
  const UIDispatch = useContext(UIDispatchContext);
  const [currentUser, setCurrentUser] = useState(initialForm);

  const checkDisabled = () => Object.values(disableSubmit).includes(true);

  console.log(checkDisabled());

  const handleUpdateForm = (name, value) =>
    setCurrentUser(prevData => ({
      ...prevData,
      [name]: value,
    }));

  const handleLogIn = () => {
    UIDispatch({ type: "log_in", email: currentUser.Email });
    handleClose();
  };

  useEffect(() => {
    if (dialogOpen) {
      setCurrentUser(initialForm);
      FormDispatch({ type: "toggle_form_open" });
      FormDispatch({ type: "reset_disable_submit", Username: false });
    }
  }, [dialogOpen]);

  return (
    <>
      <Typography variant='heading1' sx={{ fontWeight: 600, fontSize: "2rem" }}>
        Log In
      </Typography>

      <Grid container columns={1} spacing={1.5}>
        {logInInputs.map(input => (
          <Grid xxs={1}>
            <AuthenticationInput
              handleUpdateForm={handleUpdateForm}
              initialValue={currentUser[input]}
              variant={input}
            />
          </Grid>
        ))}
      </Grid>

      <Button
        variant='primary'
        onClick={handleLogIn}
        disabled={checkDisabled()}
        sx={{ width: 1, "&:hover": { boxShadow: 1 } }}
      >
        Log In
      </Button>

      <Box className='flexRow' justfiyContent='space-between' sx={{ width: 1 }}>
        <RememberMeToggle />
        <Typography
          sx={{
            height: 1,
            width: 1,
            textAlign: "right",
            textDecoration: "underline",
            height: "25px",
          }}
        >
          Forget Password
        </Typography>
      </Box>

      <Button
        variant='secondary'
        onClick={handleClose}
        // handleclose and open sign up
        sx={{ width: 1, "&:hover": { boxShadow: 1 } }}
      >
        New Account
      </Button>
    </>
  );
}

export default LogInAuthentication;

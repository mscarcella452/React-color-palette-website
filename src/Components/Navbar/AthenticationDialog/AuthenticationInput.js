import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { debounce } from "lodash";
import { validateInput } from "./AuthenticationDialogData";
import { UIContext } from "../../../Context/AppContext";

const startAdornmentIcon = {
  username: <AccountCircleIcon />,
  email: <MailOutlineIcon />,
  password: <LockOutlinedIcon />,
};

// const initalError = { color: "#333", status: "" };

export default function AuthenticationInput({
  handleUpdateForm,
  inputProps,
  submitError,
}) {
  const { formOpen, formVariant, inputName, initialInputValue } = inputProps;

  const { users } = useContext(UIContext);
  const [hidePassword, setHidePassword] = useState(inputName === "Password");
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [error, setError] = useState(false);

  const handleToggleHidePassword = () => setHidePassword(prev => !prev);

  const debouncedHandleUpdateForm = debounce((name, value) => {
    // params === params that are passed through validateRules object to function values called in validateInput function
    const params = { signUp: { value, users }, logIn: { value } };
    // checks for validation errors. If errror status !false, validation comment is shown with specific error message
    const errorStatus = validateInput(formVariant, name, params[formVariant]);
    setError(errorStatus);

    // if all inputs in parent form do not have a validation error than form is good to be submitted
    const disableSubmit = errorStatus === false ? false : true;
    // updates parent forms input values and disabe submit value for corresponding inputs
    handleUpdateForm(name, value, disableSubmit);
  }, 500);

  const handleInputChange = useCallback(e => {
    // set input for components state
    setInputValue(e.target.value);
    // set parent form corresponding inputValue but on debounce to limit re-render of entire parent form
    debouncedHandleUpdateForm(e.target.name, e.target.value);
  }, []);

  useEffect(() => {
    if (formOpen) {
      // reset values when form is opened
      setInputValue(initialInputValue);
      setError(false);
      setHidePassword(true);
    }
  }, [formOpen]);

  return (
    <Box className=' flexColumn' sx={{ height: 1, width: 1, gap: "10px" }}>
      <Typography
        variant='heading1'
        sx={{
          width: 1,
          fontWeight: 500,
          fontSize: "1rem",

          height: 1,
        }}
      >
        {inputName}
      </Typography>
      {submitError.status && (
        <Typography
          variant='heading1'
          sx={{
            fontSize: "12px",
            color: "#ba000d",
            width: 1,
            textTransform: "none",
          }}
        >
          {submitError.message}
        </Typography>
      )}

      <TextField
        placeholder={inputName}
        value={inputValue}
        name={inputName}
        onChange={handleInputChange}
        error={error || submitError.status}
        size='small'
        type={inputName === "password" && hidePassword ? "password" : null}
        InputProps={{
          sx: {
            backgroundColor: "background.primary",
            height: "50px",
          },
          startAdornment: (
            <InputAdornment position='start' sx={{ marginRight: "10px" }}>
              {startAdornmentIcon[inputName]}
            </InputAdornment>
          ),
          endAdornment: inputName === "password" && (
            <PasswordEndornment
              hidePassword={hidePassword}
              toggleHidePassword={handleToggleHidePassword}
            />
          ),
        }}
        sx={{
          padding: 0,
          width: 1,
          "& ::placeholder": {
            textTransform: "capitalize",
          },
        }}
        variant='outlined'
      />

      {error && (
        <Typography
          variant='heading1'
          sx={{
            width: 1,
            textAlign: "right",

            fontWeight: 300,
            fontSize: "12px",

            color: "#ba000d",
            textTransform: "none",
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
}

function PasswordEndornment({ hidePassword, toggleHidePassword }) {
  return (
    <InputAdornment position='end' sx={{ height: 1 }}>
      <IconButton
        aria-label='toggle password visibility'
        sx={{ p: 0 }}
        onClick={toggleHidePassword}
      >
        {hidePassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
}

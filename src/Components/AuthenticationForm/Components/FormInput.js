// import { useEffect, useRef, useState, useContext } from "react";
import { useToggle } from "../../../Hooks/CustomHooks";
import { TextField, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const adornmentIcons = {
  username: <AccountCircleIcon />,
  email: <MailOutlineIcon />,
  password: <LockOutlinedIcon />,
};

function FormInput({ inputName, error, forwardedRef }) {
  const [hidePassword, toggleHidePassword] = useToggle(true);

  return (
    <TextField
      inputRef={forwardedRef}
      placeholder={inputName}
      name={inputName}
      error={error.length > 0}
      helperText={error}
      size='small'
      type={inputName === "password" && hidePassword ? "password" : null}
      InputProps={{
        sx: {
          backgroundColor: "background.primary",
          height: "50px",
          width: 1,
        },

        startAdornment: (
          <InputAdornment position='start' sx={{ marginRight: "10px" }}>
            {adornmentIcons[inputName]}
          </InputAdornment>
        ),
        endAdornment: inputName === "password" && (
          <InputAdornment
            onClick={toggleHidePassword}
            position='end'
            sx={{ marginRight: "10px", cursor: "pointer" }}
          >
            {hidePassword ? <Visibility /> : <VisibilityOff />}
          </InputAdornment>
        ),
      }}
      sx={{
        padding: 0,
        width: 1,

        "& ::placeholder": {
          textTransform: "capitalize",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "info.main", // Change the outline color when focused here
          },
      }}
      variant='outlined'
    />
  );
}

export default FormInput;

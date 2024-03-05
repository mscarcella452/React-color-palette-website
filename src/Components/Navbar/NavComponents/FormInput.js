import { useEffect, useRef, useState, useContext } from "react";
import { useToggle } from "../../../Hooks/CustomHooks";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { UIDispatch } from "../../../Context/AppContext";

const adornmentIcons = {
  username: <AccountCircleIcon />,
  email: <MailOutlineIcon />,
  password: <LockOutlinedIcon />,
};

const savedUser = { email: "dallenSperms@gmail.com", password: "ReactMan12" };

function FormInput({ inputName, error, forwardedRef }) {
  const [hidePassword, toggleHidePassword] = useToggle(true);

  // useEffect(() => {
  //   if (rememberMe) {
  //     if (inputName === "email" && forwardedRef.current) {
  //       forwardedRef.current.value = savedUser.email;
  //     }
  //     if (inputName === "password" && forwardedRef.current) {
  //       forwardedRef.current.value = savedUser.password;
  //     }
  //   }
  // }, []);

  return (
    <Box sx={{ width: 1 }}>
      {/* <Typography
        variant='subHeading2'
        sx={{
          width: 1,
          fontWeight: 500,
          fontSize: "1rem",
          textTransform: "capitalize",

          height: 1,
        }}
      >
        {inputName}
      </Typography> */}

      <TextField
        inputRef={forwardedRef}
        placeholder={inputName}
        name={inputName}
        //   onChange={handleInputChange}
        // error={error || submitError.status}
        error={error.length > 0}
        helperText={error}
        size='small'
        type={inputName === "password" && hidePassword ? "password" : null}
        InputProps={{
          sx: {
            backgroundColor: "background.primary",
            height: "50px",
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
    </Box>
  );
}

export default FormInput;

import { useState, forwardRef } from "react";

import { Button, Dialog, Slide, IconButton, Tooltip, Box } from "@mui/material";

import AuthenticationForm from "./AuthenticationForm";

import LoginIcon from "@mui/icons-material/Login";
import { CiLogin } from "react-icons/ci";
const savedUser = { email: "dallenSperms@gmail.com", password: "ReactMan12" };

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function AccountDialog({ variant }) {
  const [formOpen, setFormOpen] = useState(false);
  const formVariant = variant !== "Icon" ? variant : "Log In";

  const handleOpen = () => setFormOpen(true);
  const handleClose = () => setFormOpen(false);

  const btnData = {
    "Sign Up": {
      component: Button,
      btnVariant: "primary",
      sx: { width: 1 },
    },
    "Log In": {
      component: Button,
      btnVariant: "secondary",
      sx: { width: 1 },
    },
    Icon: {
      component: IconButton,
      btnVariant: "primary",
      sx: { width: 35, height: 35 },
    },
  };

  return (
    <>
      {/* {btnData[variant].button} */}
      <Tooltip title={formVariant} disableHoverListener={variant !== "Icon"}>
        <Box
          component={btnData[variant].component}
          variant={btnData[variant].btnVariant}
          onClick={handleOpen}
          sx={btnData[variant].sx}
        >
          {variant !== "Icon" ? variant : <LoginIcon />}
        </Box>
      </Tooltip>
      <Dialog
        className='flexRow'
        open={formOpen}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        PaperProps={{
          sx: {
            width: { xxs: 1, mobile: "425px" },
            maxWidth: 1,
            borderRadius: "10px",
            backgroundColor: "background.secondary",
            padding: "1.5rem",
            gap: "1.5rem",
            overflow: "scroll",
          },
        }}
      >
        <AuthenticationForm variant={formVariant} handleClose={handleClose} />
      </Dialog>
    </>
  );
}

export default AccountDialog;

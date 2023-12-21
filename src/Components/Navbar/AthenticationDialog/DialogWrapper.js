import { useState, forwardRef, cloneElement } from "react";

import { Button, Container, Dialog, Slide } from "@mui/material";

import LogInAuthentication from "./LogInAuthentication";
import SignUpAuthentication from "./SignUpAuthentication";

import { FormContextProvider } from "../../../Context/FormContext";

import { authenticationData } from "./AuthenticationDialogData";

const emails = ["username@gmail.com", "user02@gmail.com"];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function DialogWrapper({ open, handleClose, children }) {
  return (
    <>
      <Dialog
        className='flexRow'
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        PaperProps={{
          sx: {
            width: { xxs: 1, sm: "450px" },

            maxWidth: "500px",
            height: "fit-content",
            maxHeight: 1,
            borderRadius: "10px",
            backgroundColor: "background.secondary",
            padding: "1.5rem",
          },
        }}
      >
        <Container disableGutters className='flexColumn' sx={{ gap: "1.5rem" }}>
          <FormContextProvider>{children}</FormContextProvider>
        </Container>
      </Dialog>
    </>
  );
}

export default DialogWrapper;

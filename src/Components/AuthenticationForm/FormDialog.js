import { useState } from "react";
import { Button, IconButton, Tooltip, Box, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import SignUpForm from "./Components/SignUpForm";
import LogInForm from "./Components/LogInForm";
import DialogWrapper from "./Components/DialogWrapper";

function FormDialog({ variant, showIcon = false, buttonLabel = variant, sx }) {
  const [formOpen, setFormOpen] = useState(false);
  const [formVariant, setFormVariant] = useState(variant);

  const handleOpen = () => setFormOpen(true);
  const handleClose = () => {
    setFormVariant(variant);
    setFormOpen(false);
  };

  const handleToggleForm = () =>
    setFormVariant(prevVariant =>
      prevVariant === "Sign Up" ? "Log In" : "Sign Up"
    );

  const FormComponent = formVariant === "Sign Up" ? SignUpForm : LogInForm;

  return (
    <>
      <Tooltip title={formVariant} disableHoverListener={!showIcon}>
        {!showIcon ? (
          <Button
            onClick={handleOpen}
            variant={btnVariantData[variant]}
            sx={{ width: 1, maxWidth: 400, ...sx }}
          >
            {buttonLabel}
          </Button>
        ) : (
          <IconButton onClick={handleOpen} variant='primary'>
            <LoginIcon />
          </IconButton>
        )}
      </Tooltip>
      <DialogWrapper open={formOpen} handleClose={handleClose}>
        <FormComponent handleClose={handleClose} />
        {/* TOGGLE FORM VARIANT */}
        <Box className='flexRow' sx={{ width: 1, flexWrap: "wrap" }}>
          <Typography variant='label'>
            {toggleVariantData[formVariant].prompt}
          </Typography>
          <Button onClick={handleToggleForm} variant='label'>
            {toggleVariantData[formVariant].btnTitle}
          </Button>
        </Box>
      </DialogWrapper>
    </>
  );
}

export default FormDialog;

const btnVariantData = {
  "Sign Up": "primary",
  "Log In": "secondary",
};

const toggleVariantData = {
  "Sign Up": { prompt: "Already have an account?", btnTitle: "Log In" },
  "Log In": { prompt: "Don't have an account?", btnTitle: "Sign Up" },
};

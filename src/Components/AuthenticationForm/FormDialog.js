import { useState, forwardRef } from "react";

import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Tooltip,
  Box,
  DialogContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import LoginIcon from "@mui/icons-material/Login";

import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

import { xs } from "../../Theme/mediaQueries";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function AccountDialog({ variant, showIcon = false }) {
  const [formOpen, setFormOpen] = useState(false);
  const [formVariant, setFormVariant] = useState(variant);
  const notFullScreen = useMediaQuery(xs);

  const handleOpen = () => setFormOpen(true);
  const handleClose = () => {
    setFormVariant(variant);
    setFormOpen(false);
  };

  const handleToggleForm = () =>
    setFormVariant(prevVariant =>
      prevVariant === "Sign Up" ? "Log In" : "Sign Up"
    );

  return (
    <>
      <Tooltip title={formVariant} disableHoverListener={!showIcon}>
        {!showIcon ? (
          <Button
            onClick={handleOpen}
            variant={btnData[variant].btnVariant}
            sx={{ width: 1 }}
          >
            {variant}
          </Button>
        ) : (
          <IconButton onClick={handleOpen} variant='primary'>
            <LoginIcon />
          </IconButton>
        )}
      </Tooltip>
      <Dialog
        open={formOpen}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        maxWidth='md' // Adjust as needed
        fullWidth
        scroll={"body"}
        fullScreen={!notFullScreen}
        PaperProps={{
          sx: {
            width: { xxs: 1, mobile: "425px" },
            maxWidth: 1,
            borderRadius: notFullScreen && "10px",
            backgroundColor: "background.secondary",
            gap: "1.5rem",
            display: !notFullScreen && "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: !notFullScreen && "45px",
          },
        }}
        sx={{
          "& .MuiDialog-container": {
            overflowY: notFullScreen ? "auto" : "hidden",
            overscrollBehavior: "none",
          },
        }}
      >
        <>
          {!notFullScreen && (
            <Box
              className='flexRow'
              sx={{
                position: "absolute",
                top: 0,
                width: 1,
                height: 45,
                padding: "5px",
                backgroundColor: "primary.dark",
              }}
            >
              <IconButton
                onClick={handleClose}
                variant='primary'
                sx={{ position: "absolute", left: "5px" }}
              >
                <CloseIcon sx={{ height: 25, width: 25 }} />
              </IconButton>
              <Typography
                onClick={handleClose}
                variant='subHeading2'
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "background.primary",
                  "& .logo_alternate": { color: "info.main" },
                }}
              >
                palette<span className='logo_alternate'>CRAFT</span>
              </Typography>
            </Box>
          )}
          <DialogContent
            className='flexColumn'
            sx={{
              gap: 2,
              justifyContent: "space-around",
              minHeight: 500,
              height: "fit-content",
              border: 1,

              padding: { xxs: 2, xs: 4 },
            }}
          >
            {formVariant === "Sign Up" ? (
              <SignUpForm handleClose={handleClose} />
            ) : (
              <LogInForm handleClose={handleClose} />
            )}
            {/* TOGGLE FORM VARIANT */}
            <Box className='flexRow' sx={{ width: 1, flexWrap: "wrap" }}>
              <Typography variant='label'>
                {btnData[formVariant].switchTo.prompt}
              </Typography>
              <Button onClick={handleToggleForm} variant='label'>
                {btnData[formVariant].switchTo.btn}
              </Button>
            </Box>
          </DialogContent>
        </>
      </Dialog>
    </>
  );
}

export default AccountDialog;

const btnData = {
  "Sign Up": {
    btnVariant: "primary",
    switchTo: { prompt: "Already have an account?", btn: "Log In" },
  },

  "Log In": {
    btnVariant: "secondary",
    switchTo: { prompt: "Don't have an account?", btn: "Sign Up" },
  },
};

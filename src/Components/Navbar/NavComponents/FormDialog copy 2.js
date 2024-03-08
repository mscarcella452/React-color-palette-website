import { useState, forwardRef, useRef, createRef } from "react";

import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Tooltip,
  Box,
  DialogContent,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AuthenticationForm from "./AuthenticationForm";

import LoginIcon from "@mui/icons-material/Login";
import { CiLogin } from "react-icons/ci";

import CircularProgress from "@mui/material/CircularProgress";

import FormInput from "./FormInput";
import { xs } from "../../../Theme/mediaQueries";
const savedUser = { email: "dallenSperms@gmail.com", password: "ReactMan12" };

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function AccountDialog({ variant }) {
  const [formOpen, setFormOpen] = useState(false);
  const [formVariant, setFormVaraint] = useState(
    variant !== "Icon" ? variant : "Log In"
  );
  const notFullScreen = useMediaQuery(xs);

  // const formVariant = variant !== "Icon" ? variant : "Log In";
  const initialFormVariant = variant !== "Icon" ? variant : "Log In";

  const handleOpen = () => setFormOpen(true);
  const handleClose = () => {
    if (formVariant !== null) {
      setFormOpen(false);
      // formVariant !== initialFormVariant && setFormVaraint(initialFormVariant);
    }
  };

  const handleToggleForm = () => {
    setFormVaraint(null);
    const newFormVariant = formVariant === "Sign Up" ? "Log In" : "Sign Up";

    setTimeout(() => {
      setFormVaraint(newFormVariant);
    }, 400);
  };

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
        <Button></Button>
        {/* <Box
          component={btnData[variant].component}
          variant={btnData[variant].btnVariant}
          onClick={handleOpen}
          sx={btnData[variant].sx}
        >
          {variant !== "Icon" ? variant : <LoginIcon />}
        </Box> */}
      </Tooltip>
      <Dialog
        open={formOpen}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        maxWidth='md' // Adjust as needed
        fullWidth
        scroll={"body"}
        // fullScreen={!notFullScreen}
        // fullScreen={formVariant !== null}
        PaperProps={{
          sx: {
            // width: "fit-content",
            // margin: 0,
            // padding: 0,
            // borderRadius: "10px",
            // background: "green",

            width: { xxs: 1, mobile: "425px" },
            maxWidth: 1,
            borderRadius: notFullScreen && "10px",
            backgroundColor:
              formVariant !== null ? "background.secondary" : "transparent",
            boxShadow: 0,

            // padding: "1.5rem",
            gap: "1.5rem",
            // height: { xxs: "100vh", xs: "fit-content" },
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",

            // padding: { xxs: 1, xs: 2, mobile: 4 },
            // maxHeight: "80vh", // Set maximum height for the content
          },
        }}
        sx={{
          "& .MuiDialog-container": {
            overflowY: notFullScreen ? "auto" : "hidden",
            overscrollBehavior: "none",
            // overflowY: "auto", // Enable vertical scrolling for the dialog container
            // padding: { xxs: 1, xs: 2, mobile: 4 },

            // background: "red",
          },
          // "& .MuiDialogContent-root": {
          //   // padding: { xxs: 1, xs: 2, mobile: 4 },
          //   // gap: 2,
          //   // justifyContent: "flex-start",
          //   background: "blue",
          //   marginTop: "45px",
          // },
        }}
      >
        {formVariant !== null ? (
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
                marginTop: !notFullScreen && "45px",
                height: !notFullScreen && "calc(100vh - 45px)",

                padding: { xxs: 2, xs: 4 },
              }}
            >
              <AuthenticationForm
                variant={formVariant}
                handleClose={handleClose}
              />

              <Box className='flexRow' sx={{ width: 1, flexWrap: "wrap" }}>
                <Typography variant='label'>{formVariant}</Typography>
                <Button onClick={handleToggleForm}>
                  <Typography variant='label'>
                    {/* {formData[variant].switchTo.btn} */}
                    toggle the form
                  </Typography>
                </Button>
              </Box>
            </DialogContent>
          </>
        ) : (
          <Box className='flexRow' sx={{ height: 1, width: 1 }}>
            <CircularProgress sx={{ color: "#fff" }} />
          </Box>
        )}
      </Dialog>
    </>
  );
}

export default AccountDialog;

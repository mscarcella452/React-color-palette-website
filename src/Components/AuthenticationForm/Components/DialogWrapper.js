import { forwardRef } from "react";
import {
  Dialog,
  Slide,
  IconButton,
  Box,
  DialogContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { xs } from "../../../Theme/mediaQueries";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function AccountDialog({ open, handleClose, children }) {
  const notFullScreen = useMediaQuery(xs);

  return (
    <Dialog
      open={open}
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
          {children}
        </DialogContent>
      </>
    </Dialog>
  );
}

export default AccountDialog;

const btnVariantData = {
  "Sign Up": "primary",
  "Log In": "secondary",
};

const toggleVariantData = {
  "Sign Up": { prompt: "Already have an account?", btnTitle: "Log In" },
  "Log In": { prompt: "Don't have an account?", btnTitle: "Sign Up" },
};

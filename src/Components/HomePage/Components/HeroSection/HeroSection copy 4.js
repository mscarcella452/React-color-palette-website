import React from "react";
import {
  Paper,
  Box,
  useMediaQuery,
  Container,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  xxs,
  md,
  mobileLandscape,
  mobilePortrait,
  iphone4,
} from "../../../../Theme/mediaQueries";
import FormDialog from "../../../AuthenticationForm/FormDialog";
import mockDashboard from "./mockDashboard.png";
import mockPalette from "./mockPalette.png";
import colorPalettes from "./colorPalettes.png";
import homeLogo from "./HomeLogo.png";
import colorSchemes from "./colorSchemes.png";
import composition from "./composition.png";
import addColor from "./addColor.png";

const logo3 =
  "https://static.vecteezy.com/system/resources/previews/001/192/275/original/rainbow-dot-color-swatches-png.png";

function HeroSection() {
  const largerScreen = useMediaQuery(md);
  return (
    <Paper
      className='flexColumn'
      elevation={0}
      sx={{
        backgroundColor: "primary.dark",
        // backgroundColor: "#FFFAF4",
        // backgroundColor: "background.primary",
        backgroundColor: "#fff",

        // padding: { xxs: "2rem .5rem", sm: 4 },

        height: "calc(100vh - 70px)",

        // minHeight: {
        //   xxs: "fit-content",
        //   xs: "450px",
        //   // sm: "500px",
        //   sm: "calc(100vh - 70px)",
        // },
        [mobileLandscape]: {
          minHeight: { xxs: "fit-content", sm: "400px", md: "600px" },
        },
        [iphone4]: { height: "calc(100vh - 70px)", padding: ".5rem" },
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          // width: "100vw",
          height: "100vh",
          position: "absolute",
          left: 0,
          right: 0,
          // top: "-10vh",
          // backgroundColor: "info.dark",

          backgroundColor: "#fff",
          "&:before": {
            content: "''",
            position: "absolute",
            right: 0,
            width: 0.6,
            height: 1,
            transform: "scaleX(-1)",
            // transform: "translate(200px, 0)",

            backgroundImage: `url(${addColor})`,
            backgroundSize: "contain",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
            borderRadius: "5px",
            // zIndex: -1,
            // opacity: 0.75,
            // boxShadow: 2,
            // border: 1,
          },
        }}
      />
      <Container
        maxWidth={"lg"}
        sx={{
          zIndex: 2,
          width: 1,
          height: 1,
          display: "grid",
          gridTemplateColumns: "1fr",
          // justifyItems: "flex-end",
          // position: "relative",
          // "&:before": {
          //   content: "''",
          //   position: "absolute",
          //   right: 0,
          //   width: 0.75,
          //   height: "85vh",
          //   // transform: "scaleX(-1)",
          //   transform: "translate(200px, 250px)",
          //   backgroundImage: `url(${mockDashboard})`,
          //   backgroundSize: "contain",
          //   backgroundPosition: "right right",
          //   backgroundRepeat: "no-repeat",
          //   zIndex: -1,
          //   opacity: 0.75,
          //   boxShadoww: 2,
          //   // border: 1,
          // },
        }}
      >
        <Box
          className='flexColumn'
          sx={{
            height: 1,
            width: 0.5,
            alignItems: "flex-start",

            // gap: { xxs: 6, sm: 3 },
            // border: 1,
          }}
        >
          <Typography
            variant='heading1'
            // textAlign={"center"}
            textAlign={{ xxs: "center", md: "left" }}
            sx={{
              color: "#2F2E41",
              fontWeight: { xxs: 500 },
              fontSize: { xxs: "70px" },
              lineHeight: 1,
            }}
          >
            Life's too short for{" "}
            <span className='logo_alternate'>boring colors!</span>
          </Typography>
          <Typography
            variant='p'
            // textAlign={"center"}
            textAlign={{ xxs: "center", md: "left" }}
            sx={{
              // color: "background.secondary",
              color: "#2F2E41",

              lineHeight: 1.5,
              fontWeight: 400,
              maxWidth: 450,
              margin: "24px 0",
            }}
          >
            Mix, match, and perfect your ideal color palette for your next
            project. Color your world your way!
          </Typography>
          <TextField
            // inputRef={forwardedRef}
            placeholder={"Enter email address..."}
            autoComplete='off'
            // name={inputName}

            size='small'
            type={"email"}
            InputProps={{
              sx: {
                // backgroundColor: "#E6E6E6",
                height: 1,
                width: 1,
                maxWidth: 450,
                borderRadius: "5px",
                padding: 0,
                boxShadow: 0,
                color: "#2F2E41",
                // boxShadow: 1,
              },

              startAdornment: (
                <InputAdornment position='start' sx={{ margin: " 0 10px" }}>
                  <MailOutlineIcon sx={{ color: "info.main" }} />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position='end' sx={{ margin: "5px" }}>
                  <FormDialog variant='Sign Up' />
                </InputAdornment>
                // <Button
                //   sx={{
                //     width: 200,
                //     borderRadius: "20px",
                //     marginRight: "2.5px",
                //   }}
                //   variant='primary'
                // >
                //   Sign Up
                // </Button>
              ),
            }}
            sx={{
              padding: 0,
              width: 1,
              height: 50,

              "& ::placeholder": {
                // textTransform: "capitalize",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E6E6E6", // Change the outline color when focused here
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#E6E6E6", // Change the outline color when focused here
                },
            }}
            // variant='outlined'
          />

          {/* <FormDialog
            variant='Sign Up'
            buttonLabel={" Create A Free Account"}
          /> */}
        </Box>
        {/* <HeroImage image={colorPalettes} /> */}
        {/* <HeroImage image={colorPalettes} order={1} /> */}
      </Container>
    </Paper>
  );
}

export default HeroSection;

function HeroImage({ image, order = -1 }) {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        // border: 1,

        transform: order === 1 ? "scaleX(-1) translateY(0)" : "translateY(0)",
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

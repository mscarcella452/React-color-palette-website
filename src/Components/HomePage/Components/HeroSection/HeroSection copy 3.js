import React from "react";
import {
  Paper,
  Box,
  useMediaQuery,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";
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
        // backgroundColor: "#fff",
        // padding: { xxs: "2rem .5rem", sm: 4 },

        height: "calc(80vh - 50px)",

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
        // overflow: "hidden",
      }}
    >
      <Container
        // maxWidth={"lg"}
        sx={{
          zIndex: 1,
          width: 1,
          height: 1,
          maxWidth: { xxs: "sm", md: "lg" },
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: ".6fr 1fr", lg: ".75fr 1fr" },
          alignItems: "flex-end",

          gap: 8,
        }}
      >
        <Box
          sx={{
            // aspectRatio: 1,
            height: 1,
            width: 1,
            order: 1,
            // border: 1,
            display: { xxs: "none", md: "block" },
            position: "relative",

            "&:before": {
              content: "''",
              position: "absolute",

              left: 0,
              // right: 0,

              height: 445,
              width: "700px",
              // bottom: 0,
              top: 0,

              // border: 1,
              transform: "translate(0, 200px)",

              backgroundImage: `url(${mockDashboard})`,
              backgroundSize: "cover",
              backgroundPosition: "top left",
              backgroundRepeat: "no-repeat",
              boxShadow: 3,
              borderRadius: "5px 5px 0 0",
              // backgroundColor: "#fff",
            },
            "&:after": {
              content: "''",
              position: "absolute",
              boxShadow: 3,
              borderRadius: "5px",
              padding: 2,
              backgroundColor: "#fff",
              right: -55,
              top: 55,
              height: "230px",

              width: "200px",
              backgroundImage: `url(${mockPalette})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            },
          }}
        />

        <Box
          className='flexColumn'
          sx={{
            height: 1,
            width: 1,
            alignItems: "flex-start",

            gap: { xxs: 6, sm: 4 },
            // border: 1,
          }}
        >
          <Typography
            variant='heading1'
            textAlign={{ xxs: "center", md: "left" }}
            sx={{
              // color: "fontColor.primary",
              fontWeight: { xxs: 500 },
              fontSize: { xxs: "65px" },
              lineHeight: 1,
            }}
          >
            Life's too short for{" "}
            <span className='emphasize'>boring colors!</span>
          </Typography>
          <Typography
            variant='subHeading'
            textAlign={{ xxs: "center", md: "left" }}
            sx={{
              color: "background.secondary",
              // color: "fontColor.primary",
              lineHeight: 1.5,
              // fontWeight: 500,
            }}
          >
            Mix, match, and perfect your ideal color palette for your next
            project. Color your world your way!
          </Typography>
          <Box
            className='flexColumn'
            sx={{
              width: 1,
              maxWidth: 450,
              gap: 2,

              alignItems: "flex-start",
            }}
          >
            {/* <TextField
              // inputRef={forwardedRef}
              placeholder={"Enter email address..."}
              // name={inputName}

              size='small'
              type={"email"}
              InputProps={{
                sx: {
                  backgroundColor: "background.primary",
                  height: 1,
                  width: 1,
                  borderRadius: "20px",
                  padding: 0,
                  boxShadow: 0,
                },

                endAdornment: (
                  <Button
                    sx={{
                      width: 200,
                      borderRadius: "20px",
                      marginRight: "2.5px",
                    }}
                    variant='primary'
                  >
                    Sign Up
                  </Button>
                ),
              }}
              sx={{
                padding: 0,
                width: 1,
                height: 45,

                "& ::placeholder": {
                  // textTransform: "capitalize",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent", // Change the outline color when focused here
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    outlineColor: "red",
                    borderColor: "info.main", // Change the outline color when focused here
                  },
              }}
              // variant='outlined'
            /> */}
            <FormDialog
              variant='Sign Up'
              buttonLabel={" Create A Free Account"}
            />
            {/* <Typography
              variant='tinyLabel'
              textAlign={{ xxs: "center", md: "left" }}
              sx={{
                color: "background.secondary",
                // color: "fontColor.primary",
                lineHeight: 1.5,
                // fontWeight: 500,
              }}
            >
              Create a 100% free account today!
            </Typography> */}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default HeroSection;

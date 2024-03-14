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
  mobile,
  sm,
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

const texture =
  "https://www.transparenttextures.com/patterns/subtle-white-feathers.png";

function HeroSection() {
  const mobilePhone = useMediaQuery(mobile);
  return (
    <Paper
      className='flexColumn textureGradient'
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        padding: { xxs: "2rem .5rem", mobile: 4 },
        minHeight: {
          xxs: "fit-content",
          xs: "425px",
          sm: "400px",
          md: "550px",
          lg: "calc(100vh - 70px)",
        },
        [mobileLandscape]: {
          minHeight: { xxs: "fit-content", sm: "400px", md: "600px" },
        },
        [iphone4]: { height: "calc(100vh - 70px)", padding: ".5rem" },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        sx={{
          maxWidth: { xxs: "sm", sm: "md", lg: "lg" },
          width: 1,
          height: 1,
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr",
            sm: "1fr",
            md: "1fr .75fr",
            lg: "1fr 1fr",
          },
          gap: 8,
        }}
      >
        <Box
          className='flexColumn'
          sx={{
            height: 1,
            width: 1,
            alignItems: { xxs: "center", md: "flex-start" },
            zIndex: 3,
            gap: 4,
          }}
        >
          <Typography
            variant='heading1'
            textAlign={{ xxs: "center", md: "left" }}
            maxWidth={{ xxs: 1, sm: "sm", md: 1 }}
          >
            Life's too short for{" "}
            <span className='logo_alternate'>boring colors!</span>
          </Typography>

          <Typography
            variant='p'
            textAlign={{ xxs: "center", md: "left" }}
            maxWidth='sm'
          >
            Mix, match, and perfect your ideal color palette for your next
            project. Color your world your way!
          </Typography>
          {mobilePhone ? (
            <TextField
              placeholder={"Enter email address..."}
              autoComplete='off'
              size='small'
              type={"email"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MailOutlineIcon sx={{ color: "info.main" }} />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position='end'>
                    <FormDialog variant='Sign Up' buttonLabel={"Get Started"} />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: { xxs: "mobile", md: 1 },
              }}
            />
          ) : (
            <FormDialog
              variant='Sign Up'
              buttonLabel={"Create A Free Account"}
            />
          )}
        </Box>
        <Box
          sx={{
            width: 1,
            height: 1,
            display: { xxs: "none", md: "block" },
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              right: 0,
              height: { xxs: 345, lg: 498 },
              top: { xxs: -50, lg: -75 },
              width: { xxs: 425, lg: 615 },
              backgroundImage: `url(${addColor})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            },
          }}
        />
      </Container>
    </Paper>
  );
}

export default HeroSection;

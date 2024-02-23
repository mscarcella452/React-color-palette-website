import React from "react";
import {
  Paper,
  Box,
  useMediaQuery,
  Container,
  Typography,
  Button,
} from "@mui/material";
import {
  xxs,
  md,
  mobileLandscape,
  mobilePortrait,
  iphone4,
} from "../../../Theme/mediaQueries";

function HeroSection() {
  const largerScreen = useMediaQuery(md);
  return (
    <Paper
      className='flexRow'
      sx={{
        height: "calc(100vh - 70px)",
        backgroundColor: "primary.main",
        // background:
        //   "linear-gradient(to right, #FAF3EF, #F7EBE4, #F3E0D7, #E8D5CA, #D3BFAF)",

        padding: { xxs: "2rem 1rem", xs: "2rem 1.5rem", mobile: "2rem" },

        [mobileLandscape]: {
          height: "fit-content",
          minHeight: { xxs: "calc(100vh - 70px)", lg: "600px" },
        },
        [mobilePortrait]: {
          height: "fit-content",
          minHeight: { xxs: "calc(100vh - 70px)", mobile: "650px" },
        },
      }}
    >
      <Container
        className='flexColumn'
        maxWidth={true}
        sx={{
          width: 1,
          height: 1,
          // border: 1,
          maxWidth: "800px",
          gap: { xxs: "2rem", xs: "3rem" },
          // [mobilePortrait]: {
          //   // gap: "1rem",
          //   // justifyContent: "space-around",
          //   height: "fit-content",
          //   minHeight: "375px",
          // },
        }}
      >
        <Typography variant='heading1'>
          Life's too short for boring colors!
        </Typography>
        <Typography
          variant='subHeading1'
          sx={{
            fontSize: { xxs: "16px", xs: "18px", mobile: "22px", sm: "24px" },
            lineHeight: { xxs: "28px", xs: "30px", mobile: "34px", sm: "36px" },
          }}
        >
          Mix, match, and perfect your ideal color palette for your next
          project. Color your world your way!
        </Typography>
        <Box
          className='flexRow'
          sx={{
            width: 1,
            gap: { xxs: "1rem", xs: "1.5rem", mobile: "1rem" },
            flexDirection: { xxs: "column", mobile: "row" },
          }}
        >
          <Button variant='primary' sx={{ width: { xxs: 1, mobile: "275px" } }}>
            Create A Free Account
          </Button>
          <Button
            variant='secondary'
            sx={{ width: { xxs: 1, mobile: "200px" } }}
          >
            Log In
          </Button>
        </Box>
      </Container>
    </Paper>
  );
}

export default HeroSection;

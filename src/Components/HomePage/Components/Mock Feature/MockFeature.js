import React from "react";
import { Paper, Container, Box, Typography } from "@mui/material";
import exampleMockFeature from "./exampleMockFeature.png";

const mockImage = "https://clipart-library.com/image_gallery2/Laptop.png";

function MockFeature() {
  return (
    <Paper
      className='flexColumn'
      // variant='featurePaper'
      sx={{
        backgroundColor: "#fff",
        backgroundColor: "primary.dark",
        padding: { xxs: "2rem 1rem", sm: "2rem", lg: 6 },
      }}
    >
      <Container
        className='flexColumn'
        // maxWidth={true}
        sx={{
          width: 1,
          height: { xxs: "fit-content", md: "500px" },
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", sm: ".85fr 1fr" },
          gridTemplateRows: { xxs: "1fr .75fr", sm: "1fr" },
          gap: { xxs: "2rem", sm: "3rem" },
          backgroundColor: "primary.main",
          // borderRadius: "30px 30px 0 0 ",
          boxShadow: 5,
        }}
      >
        <Box
          sx={{
            height: { xxs: "400px", sm: 1 },
            width: 1,
            backgroundImage: `url(${mockImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        {/* <img
          src={mockImage}
          style={{
            // width: "100%",
            maxWidth: "700px",
            height: "100%",
            border: "1px solid red",
          }}
        /> */}
        <Box
          className='flexColumn'
          sx={{
            gap: "20px",
            // order: { xxs: -1, md: 1 },
          }}
        >
          <Typography
            variant='heading1'
            sx={{
              width: 1,
              textAlign: { xxs: "center", sm: "left" },
              fontWeight: 400,
              // color: "primary.dark",
            }}
          >
            Your Palette. <span className='logo_alternate'>Your Vision.</span>
          </Typography>
          <Typography
            variant='subHeading'
            // color='fontColor.primary'
            // color='info.main'
            color='background.secondary'
            maxWidth={"md"}
            sx={{
              order: 1,
              lineHeight: 2,
              textAlign: { xxs: "center", sm: "left" },
            }}
          >
            With an intuitive interface and a diverse color wheel, you can
            effortlessly mix and match hues, creating unique combinations
            tailored to your artistic style.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default MockFeature;

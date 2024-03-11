import { useState } from "react";
import { Paper, Container, Typography, Box, Button } from "@mui/material";
import FeatureContent from "./Components/FeatureContent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { featureData } from "./data/featureData";

const colorFreedomBenefits = [
  "Endless Choices",
  "Dynamic Palettes",
  "Instant Inspiration",
  "Effortless Exploration",
  "Precision Control",
  "Seamless Integration",
];
const texture =
  "https://www.transparenttextures.com/patterns/diagonal-striped-brick.png";

function Feature({ contentIndex }) {
  const { content, image } = featureData[contentIndex];
  const { heading, title, bulletPoints, description, btnTitle } = content;

  return (
    <Paper
      // variant='featurePaper'
      elevation={0}
      sx={{
        position: "relative",
        backgroundColor: "background.primary",

        height: 550,
        // height: "fit-content",
        position: "relative",
        "&:before": {
          // content: "''",
          position: "absolute",
          width: 1,
          height: 1,
          backgroundImage: `url(${texture})`,
          backgroundSize: "150px",
          backgroundPosition: "center",
          opacity: 0.25,

          // backgroundRepeat: "no-repeat",
        },
      }}
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          position: "relative",
          zIndex: 1,

          "&:before": {
            content: "''",
            position: "absolute",
            // top: -40,
            right: 50,

            // left: 300,
            // bottom: -40,
            // border: 1,
            width: "70%",
            height: 400,
            // transform: "translate(-50%, 0)",
            // width: "50vh",

            backgroundColor: "#fff",
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            borderRadius: "10px",
            // border: 1,
            borderColor: "background.secondary",
            // opacity: 0.25,
            zIndex: -1,
            // boxShadow: 1,
          },
        }}
      >
        <Box
          className='flexColumn'
          sx={{
            width: 1,
            height: 1,
            gap: "1.5rem",
            alignItems: "flex-start",
            backgroundColor: "#fff",
            border: 1,
            borderColor: "background.secondary",
            borderRadius: "10px",
            padding: 4,

            position: "relative",
            // border: 1,
            zIndex: 1,
            boxShadow: 2,
            order: 1,
            display: "none",
          }}
        >
          <Grid container columns={1} sx={{ width: 1, gap: 2 }}>
            {bulletPoints.map(bulletPoint => (
              <Grid xxs={1} className='flexRow' sx={{ padding: 1, gap: 4 }}>
                <Typography sx={{ color: "primary.main" }}>&#10003;</Typography>
                <Typography
                  variant='subHeading3'
                  textAlign='left'
                  sx={{ width: 1, fontWeight: 500 }}
                  // sx={{ width: 1, fontWeight: 700, color: "primary.main" }}
                >
                  {bulletPoint}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          className='flexColumn'
          sx={{
            width: 1,
            height: 1,
            gap: "1.5rem",
            alignItems: "flex-start",
            backgroundColor: "background.primary",
            // border: 1,
            // borderColor: "background.secondary",
            borderRadius: "10px",
            padding: 4,

            position: "relative",
            // border: 1,
            zIndex: 1,
            // boxShadow: 2,
          }}
        >
          <Typography
            variant='heading2'
            textAlign='left'
            sx={{ fontWeight: 700, color: "primary.dark" }}
          >
            {heading}
          </Typography>

          <Typography
            variant='subHeading'
            textAlign='left'
            sx={{ color: "fontColor.primary" }}
          >
            {description}
          </Typography>

          <Button
            className='flexRow'
            sx={{
              // border: 1,
              // boxShadow: 1,
              // borderColor: "#6C64FF",
              padding: 2,
              // width: 1,
              // justifyContent: "flex-start",
              gap: 1,
              backgroundColor: "#6C64FF",
              color: "background.primary",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "#6C64FF",
                color: "background.primary",
                boxShadow: 1,
                borderColor: "#6C64FF",
                "& .button_icon": {
                  transform: "translateX(5px)",
                  "& .arrow-icon": {
                    display: "inline",
                  },
                  "& .chevron-icon": {
                    display: "none",
                  },
                },
              },
            }}
          >
            <Typography>{btnTitle}</Typography>
            <Box
              className='button_icon flexRow'
              sx={{ transition: "transform 0.3s" }}
            >
              <ChevronRightIcon
                className='chevron-icon'
                sx={{ display: "inline" }}
              />
              <ArrowForwardIcon
                className='arrow-icon'
                sx={{ display: "none" }}
              />
            </Box>
          </Button>
        </Box>
      </Container>
    </Paper>
  );
}

export default Feature;

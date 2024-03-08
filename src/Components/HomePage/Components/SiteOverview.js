// import { useState } from "react";
import { Paper, Container, Box, Typography } from "@mui/material";

const OverviewContent = [
  <>
    From concept to creation, our platform empowers you to{" "}
    <span className='emphasize'>design beyond any color boundaries</span>!
  </>,
  <>
    Unleash your imagination and design with confidence, armed with a{" "}
    <span className='emphasize'>palette that is uniquely yours</span>.
  </>,
];

function SiteOverview({ contentIndex }) {
  return (
    <Paper
      variant='featurePaper'
      sx={{ position: "relative", backgroundColor: "primary.dark" }}
    >
      <Container className='flexRow' sx={{ gap: "4rem" }}>
        <Typography
          variant='heading2'
          sx={{
            textAlign: "center",
            lineHeight: { xxs: 1.5 },
            fontWeight: 300,
            maxWidth: "md",
            // maxWidth: "725px",
            color: "background.secondary",
            "& .emphasize": {
              color: "secondary.main",
              textTransform: "uppercase",
              fontWeight: 700,
            },
          }}
        >
          {OverviewContent[contentIndex]}
        </Typography>
      </Container>
    </Paper>
  );
}

export default SiteOverview;

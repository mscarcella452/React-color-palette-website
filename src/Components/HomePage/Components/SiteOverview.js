// import { useState } from "react";
import { Paper, Container, Box, Typography } from "@mui/material";

const OverviewContent = [
  <>
    From concept to creation, our platform empowers you to{" "}
    <span className='emphasize'>design beyond any color boundaries!</span>
  </>,
  <>
    Unleash your imagination and design with confidence, armed with{" "}
    <span className='emphasize'>a palette that is uniquely yours.</span>
  </>,
];

function SiteOverview({ contentIndex }) {
  return (
    <Paper variant='featurePaper' sx={{ backgroundColor: "primary.dark" }}>
      <Container className='flexRow'>
        <Typography
          variant='heading2'
          sx={{ textAlign: "center", maxWidth: "md" }}
        >
          {OverviewContent[contentIndex]}
        </Typography>
      </Container>
    </Paper>
  );
}

export default SiteOverview;

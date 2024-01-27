// import { useState } from "react";
import { Paper, Container, Box, Typography } from "@mui/material";

const OverviewContent = [
  "From concept to creation, our platform empowers you to design beyond any color boundaries!",
  "Unleash your imagination and design with confidence, armed with a palette that is uniquely yours.",
];

function SiteOverview({ contentIndex }) {
  return (
    <Paper
      variant='featurePaper'
      sx={{ position: "relative", backgroundColor: "fontColor.secondary" }}
    >
      <Container className='flexRow' sx={{ gap: "4rem" }}>
        <Typography
          variant='subHeading1'
          sx={{
            textAlign: "center",
            lineHeight: { xxs: 1.5 },
            // fontWeight: 600,
            maxWidth: "725px",

            color: "background.primary",
          }}
        >
          {OverviewContent[contentIndex]}
        </Typography>
      </Container>
    </Paper>
  );
}

export default SiteOverview;

import React from "react";
import { Paper, Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const socialMedia = ["Create", "Palettes", "Templates", "Templates"];

function Footer() {
  return (
    <Paper
      sx={{
        padding: { xxs: "1rem", md: "01.5rem" },
        backgroundColor: "primary.main",
      }}
    >
      <Container
        className='flexColumn'
        maxWidth={false}
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <Box className='flexColumn' justifyContent={"flex-start"}>
          <Typography
            variant='subHeading1'
            fontWeight={700}
            width={1}
            textAlign='left'
          >
            PaletteCraft
          </Typography>
          <Typography variant='subHeading2' width={1} textAlign='left'>
            Live's too short for boring colors!
          </Typography>
        </Box>
        <Box className='flexColumn' sx={{ border: 1, gap: "2rem" }}>
          <Box className='flexRow' gap={"1rem"}>
            <Typography variant='label'>Follow Us:</Typography>
            <Box className='flexRow' gap={"1rem"}>
              {socialMedia.map(media => (
                <Box sx={{ height: "50px", aspectRatio: 1, border: 1 }} />
              ))}
            </Box>
          </Box>
          <Typography variant='p'>credit</Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;

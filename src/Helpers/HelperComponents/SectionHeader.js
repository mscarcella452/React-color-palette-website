// import React from 'react'
import { Box, Typography } from "@mui/material";

function SectionHeader({ data }) {
  const { title, description } = data;
  return (
    <Box
      className='flexColumn'
      sx={{
        width: 1,
        maxWidth: "650px",
        gap: "1rem",
      }}
    >
      <Typography
        variant='mainTitle'
        sx={{
          fontSize: "50px",
          lineHeight: "60px",
          textAlign: "center",
          color: "fontColor.primary",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='heading1'
        sx={{
          fontSize: "24px",
          lineHeight: "36px",
          textAlign: "center",
          color: "fontColor.primary",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default SectionHeader;

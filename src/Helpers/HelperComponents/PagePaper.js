import React from "react";
import { Paper, Container } from "@mui/material";

function PagePaper({ className, paperProps, sx, children }) {
  return (
    <Paper
      className={className}
      sx={{
        width: 1,
        height: "fit-content",
        boxShadow: 0,
        padding: "2rem 0",
        backgroundColor: "transparent",

        ...paperProps,
      }}
    >
      <Container
        className='flexColumn'
        sx={{
          justifyContent: "flex-start",
          height: 1,
          width: 1,
          padding: "2rem",

          ...sx,
        }}
      >
        {children}
      </Container>
    </Paper>
  );
}

export default PagePaper;

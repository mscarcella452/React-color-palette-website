// import React from "react";
import { Paper, Box } from "@mui/material";

function Navbar() {
  return (
    <Paper
      className='flexRow'
      elevation={2}
      sx={{
        height: "70px",
        top: 0,
        width: 1,
        position: "sticky",

        zIndex: 2,
        backgroundColor: "background.secondary",
      }}
    >
      Navbar 2:
    </Paper>
  );
}

export default Navbar;

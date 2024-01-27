// import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Divider, Box, Link, Typography } from "@mui/material";
const links = ["Create", "Your Palettes", "Templates"];

function NavLinks() {
  return (
    <>
      {links.map((link, index) => (
        <Box className='flexRow' key={uuidv4()} sx={{ height: 1, gap: "15px" }}>
          <Link
            className='navbar_link'
            sx={{
              // color: "#333",
              // color: "#fff",
              color: "secondary.dark",
              textDecoration: "none",
              marginLeft: index !== 0 && "15px",
            }}
          >
            <Typography variant='label'>{link}</Typography>
          </Link>
          {index < links.length - 1 && <Divider orientation='vertical' />}
        </Box>
      ))}
    </>
  );
}

export default NavLinks;

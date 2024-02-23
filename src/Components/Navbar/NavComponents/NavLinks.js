// import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Divider, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const links = [
  { text: "Create", link: "/Create" },
  { text: "Your Palettes", link: "/userPalettes" },
  { text: "Templates", link: "/templates" },
];

function NavLinks() {
  return (
    <>
      {links.map((link, index) => (
        <Box className='flexRow' key={uuidv4()} sx={{ height: 1, gap: "15px" }}>
          <Link
            className='navbar_link'
            to={link.link}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant='label'
              sx={{
                // color: "#333",
                // color: "#fff",
                color: "secondary.dark",

                marginLeft: index !== 0 && "15px",
              }}
            >
              {link.text}
            </Typography>
          </Link>
          {index < links.length - 1 && <Divider orientation='vertical' />}
        </Box>
      ))}
    </>
  );
}

export default NavLinks;

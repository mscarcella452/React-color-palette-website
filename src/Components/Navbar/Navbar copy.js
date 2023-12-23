import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { UIContext, UIDispatchContext } from "../../Context/AppContext";
import {
  Paper,
  Container,
  Typography,
  Box,
  Link,
  Divider,
  Button,
} from "@mui/material";

import "./Navbar.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import FormDialog from "./AthenticationDialog/FormDialog";
import PaletteLogo from "./PaletteLogo";

const logo =
  "url('https://img.freepik.com/free-vector/paint-brushes-color-palette_1308-127912.jpg?w=1380&t=st=1701990166~exp=1701990766~hmac=be3c704103b65d083a03283f1c7e71a3e8eb114b12f9ebd7952713311eeee63e')";

const links = ["Create", "Palettes", "Templates"];

const navButtons = [
  { name: "Sign Up", btnVariant: "primary", dialogVariant: "signUp" },
  { name: "Log In", btnVariant: "secondary", dialogVariant: "logIn" },
];

function Navbar() {
  const { currentUser } = useContext(UIContext);
  const { username, loggedIn } = currentUser;

  return (
    <Paper
      className='flexRow navbar_wrapper'
      elevation={1}
      sx={{ backgroundColor: "background.secondary", padding: "0 2rem" }}
    >
      <Container
        disableGutters
        sx={{
          // justifyContent: "space-between",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr",
          border: "1px solid pink",
        }}
      >
        <Box
          sx={{
            height: 1,
            width: 1,
            padding: "5px 0",
            border: "1px solid",
          }}
        >
          <PaletteLogo />
        </Box>
        <Box
          className='flexRow'
          sx={{
            height: 1,
            width: 1,
            maxWidth: 1,
            padding: "1rem 0",
            gap: "20px",
          }}
        >
          <Box className='flexRow' sx={{ width: "fit-content", height: 1 }}>
            {links.map((link, index) => (
              <Box
                className='flexRow'
                key={uuidv4()}
                sx={{ height: 1, gap: "15px" }}
              >
                <Link
                  className='navbar_link'
                  sx={{
                    color: "#333",
                    textDecoration: "none",
                    marginLeft: index !== 0 && "15px",
                  }}
                >
                  <Typography variant='heading1'>{link}</Typography>
                </Link>
                {index < links.length - 1 && <Divider orientation='vertical' />}
              </Box>
            ))}
          </Box>
          {loggedIn && (
            <Box
              className='flexRow'
              sx={{ height: 1, gap: "2.5px", marginLeft: "1rem" }}
            >
              <AccountCircleIcon sx={{ color: "info.dark" }} />
              <Typography
                variant='heading1'
                sx={{ fontWeight: 500, marginRight: "2.5px" }}
              >
                {username}
              </Typography>
              <ArrowDropDownIcon sx={{ color: "info.dark" }} />
            </Box>
          )}

          {!loggedIn && (
            <Container
              disableGutters
              variant='button_container'
              sx={{ width: 1, gap: "10px", border: "1px solid" }}
            >
              <FormDialog variant='signUp' />
              <FormDialog variant='logIn' />
              {/* {navButtons.map(button => (
                <AuthenticationDialog button={button} key={uuidv4()} />
              ))} */}
            </Container>
          )}
        </Box>
      </Container>
    </Paper>
  );
}

export default Navbar;

function LinkDivider({ index }) {
  return (
    <Divider
      variant='vertical'
      sx={{
        display: index === 0 || index === links.length - 1 ? "none" : "block",
      }}
    />
  );
}

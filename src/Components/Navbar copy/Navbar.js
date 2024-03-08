import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { UIContext, UIDispatchContext } from "../../Context/AppContext";
import {
  Paper,
  Container,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { useLocation } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

import SignIn from "./NavComponents/SignIn";
import NavLinks from "./NavComponents/NavLinks";

import FormDialog from "./AthenticationDialog/FormDialog";
import PaletteLogo from "./NavComponents/PaletteLogo";

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
      elevation={0}
      sx={{
        backgroundColor: "background.primary",
        backgroundColor: "#415A6B",
        // backgroundColor: "#a2d4e6",
        padding: { xxs: "0 1rem", md: "0 1.5rem" },
        zIndex: 100,
        color: "#fff",
      }}
    >
      <Container
        disableGutters
        className='flexRow'
        maxWidth={false}
        sx={{
          // justifyContent: "space-between",
          display: "grid",
          gridTemplateColumns: {
            xxs: "50px 1fr",
            mobile: "75px 1fr 75px",
            // sm: "50px 1fr 1fr",
            md: "1fr 2fr 275px",
          },
          gridTemplateRows: "1fr",
          gap: { xxs: "20px", md: "2rem" },

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className='flexRow'
          sx={{
            height: 1,

            display: { xxs: "flex", md: "none" },
          }}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
        <Link
          className='navbar_link'
          to='/'
          sx={{ textDecoration: "none", border: 1 }}
        >
          <Typography variant='boldLabel'>Palette Craft</Typography>
        </Link>
        <Box
          className='flexRow'
          justifyContent='flex-end'
          sx={{
            height: 1,

            padding: "1rem 0",
            display: { xxs: "none", md: "flex" },
          }}
        >
          <NavLinks />
        </Box>

        <SignIn loggedIn={loggedIn} />
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
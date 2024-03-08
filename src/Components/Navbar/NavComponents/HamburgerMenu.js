import { useContext } from "react";
import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import { Box, Typography, Button } from "@mui/material";
import FormDialog from "../../AuthenticationForm/FormDialog";
import { mobileLandscape } from "../../../Theme/mediaQueries";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { MdOutlineCreate, MdAccountCircle } from "react-icons/md";
import { IoHomeOutline, IoBookmarksOutline } from "react-icons/io5";
import { NavLink } from "./HelperComponents";

const navLinks = [
  {
    text: "Home",
    to: "/",
    icon: <IoHomeOutline className='navbar_icon' />,
  },
  {
    text: "Create",
    to: "/createPalette",
    icon: <MdOutlineCreate className='navbar_icon' />,
  },
  {
    text: "Your Palettes",
    to: "/userPalettes",
    icon: <IoBookmarksOutline className='navbar_icon' />,
  },
  {
    text: "Templates",
    to: "/templatePalettes",
    icon: <LiaSwatchbookSolid className='navbar_icon' />,
  },
];

function HamburgerMenu({ hamburgerMenuRef }) {
  const { currentUser } = useContext(UIContext);
  const UIDispatch = useContext(UIDispatchContext);

  const handleLogOut = () => UIDispatch({ type: "log_out" });

  const loggedIn = currentUser !== null;

  return (
    <Box
      className='flexColumn'
      ref={hamburgerMenuRef}
      sx={{
        position: "absolute",
        top: 70,
        width: 1,
        padding: { xxs: "1rem", sm: "1rem 2rem" },
        gap: 4,
        zIndex: -1,
        alignItems: "flex-start",
        minHeight: { xxs: 410, xs: 0 },
        [mobileLandscape]: {
          gap: 0,
          minHeight: 0,
        },
      }}
    >
      {/* AUTHENTICATION CONTIANER */}
      <Box
        className='flexColumn'
        sx={{
          width: 1,
          zIndex: 1,
          justifyContent: "space-between",
          gap: { xxs: 2, xs: 4 },
          display: { xxs: "flex", sm: "none" },
          [mobileLandscape]: {
            display: "none",
          },
        }}
      >
        <Box className='flexColumn' sx={{ gap: 1 }}>
          <Box
            className='flexRow'
            sx={{
              color: "info.dark",
              height: { xxs: 50, xs: 70 },
              width: { xxs: 50, xs: 70 },
            }}
          >
            <MdAccountCircle style={{ width: "100%", height: "100%" }} />
          </Box>

          <Typography
            variant={"label"}
            sx={{
              fontWeight: 700,
              color: loggedIn ? "secondary.main" : "#fff",
              textAlign: "center",
            }}
          >
            {loggedIn ? currentUser.username : "Guest"}
          </Typography>
        </Box>

        <Box className='flexRow' sx={{ gap: 2, width: 1, maxWidth: 400 }}>
          {loggedIn ? (
            <Button
              variant='primary'
              onClick={handleLogOut}
              sx={{ width: 1, maxWidth: 350 }}
            >
              Sign Out
            </Button>
          ) : (
            <>
              <FormDialog variant='Sign Up' />
              <FormDialog variant='Log In' />
            </>
          )}
        </Box>
      </Box>

      {/* NAV LINKS CONTIANER */}
      <Box
        sx={{
          width: 1,
          [mobileLandscape]: {
            width: 0.75,
          },
          paddingLeft: { xxs: "1rem 1.5rem", mobile: "2rem" },
          // border: 1,
        }}
      >
        {navLinks.map((navLink, index) => (
          <Box
            className='flexRow'
            key={index}
            sx={{
              width: index % 2 !== 0 ? 0.5 : 0.75,
              minWidth: "fit-content",
              justifyContent: "flex-start",

              height: { xxs: 50, xs: 60 },
              [mobileLandscape]: {
                height: { xxs: 45, sm: 60 },
              },
            }}
          >
            <NavLink key={index} to={navLink.to} icon={navLink.icon}>
              {navLink.text}
            </NavLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HamburgerMenu;

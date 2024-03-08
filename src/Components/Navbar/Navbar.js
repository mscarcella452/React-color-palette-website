import { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "../../Context/AppContext";
import { md, sm, mobileLandscape } from "../../Theme/mediaQueries";
import { Paper, Box, IconButton, useMediaQuery } from "@mui/material";
import { NavLink, CurrentUserAvatar } from "./NavComponents/HelperComponents";
import AnimatedHamburgerIcon from "../../Helpers/HelperComponents/AnimatedHamburgerIcon";
import HamburgerMenu from "./NavComponents/HamburgerMenu";
import FormDialog from "../AuthenticationForm/FormDialog";
import { navLinksData } from "./NavbarData";
import "./Navbar.css";

function Navbar() {
  const { currentUser } = useContext(UIContext);
  const [showMenu, setShowMenu] = useState(false);
  const lockMenu = useMediaQuery(md);
  const showSignUpDialog = useMediaQuery(sm || mobileLandscape);

  const hamburgerMenuRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    if (showMenu && lockMenu) setShowMenu(false);
  }, [lockMenu, showMenu, setShowMenu]);

  useEffect(() => {
    const hamburgerMenu = hamburgerMenuRef.current;
    const handleHeightChange = () => {
      const height = hamburgerMenu && hamburgerMenu.offsetHeight;
      if (navbarRef.current) {
        navbarRef.current.style.height = showMenu ? height + 70 + "px" : "70px";
      }
    };

    handleHeightChange(); // Initial height calculation

    const resizeObserver = new ResizeObserver(handleHeightChange);
    if (hamburgerMenu) {
      resizeObserver.observe(hamburgerMenu);
    }

    return () => {
      if (hamburgerMenu) {
        resizeObserver.unobserve(hamburgerMenu);
      }
    };
  }, [hamburgerMenuRef, navbarRef, showMenu]);

  const handleClick = () => (showMenu ? setShowMenu(false) : setShowMenu(true));

  return (
    <Paper
      ref={navbarRef}
      className='navbar_container'
      elevation={0}
      sx={{
        backgroundColor: {
          xxs: showMenu ? "primary.main" : "primary.dark",

          md: "primary.dark",
        },
        transition: "all 1s linear",
      }}
    >
      <Box
        className='navbar flexRow'
        sx={{
          padding: { xxs: "10px 1.5rem", sm: "10px 2rem" },
          justifyContent: "space-between",
        }}
      >
        <Box
          className='logo_wrapper flexRow'
          sx={{
            gap: !lockMenu && 2,
            // border: 1,
            width: lockMenu && 225,
            flex: !lockMenu && 1,
          }}
        >
          {!lockMenu && (
            <IconButton
              onClick={handleClick}
              variant='primary'
              sx={{ zIndex: 2 }}
            >
              <AnimatedHamburgerIcon
                animate={showMenu}
                backgroundColor='info.main'
              />
            </IconButton>
          )}

          <NavLink variant='subHeading1'>
            palette<span className='logo_alternate'>CRAFT</span>
          </NavLink>
        </Box>
        {lockMenu && (
          <Box
            className='navLinks_wrapper flexRow'
            sx={{ border: 0, width: { xxs: 475, lg: 625 } }}
          >
            {navLinksData.map((navLink, index) => (
              <NavLink key={index} to={navLink.to} variant='subHeading2'>
                {navLink.text}
              </NavLink>
            ))}
          </Box>
        )}
        <Box
          className='authentication_wrapper flexRow'
          sx={{
            width: { xxs: "fit-content", sm: 225 },
            [mobileLandscape]: { width: 225 },
          }}
        >
          <>
            {currentUser !== null ? (
              <CurrentUserAvatar
                username={currentUser.username}
                showMenu={showMenu}
              />
            ) : (
              <>
                {showSignUpDialog && <FormDialog variant='Sign Up' />}
                <FormDialog variant='Log In' showIcon={!showSignUpDialog} />
              </>
            )}
          </>
        </Box>
      </Box>

      {!lockMenu && <HamburgerMenu hamburgerMenuRef={hamburgerMenuRef} />}
    </Paper>
  );
}

export default Navbar;

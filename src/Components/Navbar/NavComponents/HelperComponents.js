import { useContext } from "react";
import {
  Typography,
  Avatar,
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UIDispatchContext } from "../../../Context/AppContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { sm, mobileLandscape } from "../../../Theme/mediaQueries";

// NAVLINK  ---------------------------------
export function NavLink({ to = "/", variant = "label", icon, children }) {
  return (
    <Link
      className='navbar_link flexRow'
      to={to}
      style={{ gap: icon && "1rem", width: "fit-content" }}
    >
      {icon && (
        <Box className='flexRow' sx={{ color: "info.main" }}>
          {icon}
        </Box>
      )}
      <Typography
        className='link_typography'
        variant={variant}
        sx={{
          color: "background.secondary",
          fontWeight: variant === "subHeading2" ? 700 : 500,

          "& .logo_alternate": {
            color: "info.main",
            fontWeight: 700,
          },

          "&:hover": { color: "info.main" },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}

// CURRENT USER AVATAR ---------------------------------
export function CurrentUserAvatar({ username, variant = "navbar", showMenu }) {
  const UIDispatch = useContext(UIDispatchContext);
  const hideAvatarToolTip = useMediaQuery(sm);

  const handleLogOut = () => UIDispatch({ type: "log_out" });

  return (
    <>
      <Box className='flexRow' sx={{ gap: 1, height: 1 }}>
        <Tooltip
          title={username}
          disableHoverListener={variant !== "navbar" || hideAvatarToolTip}
        >
          <Avatar
            sx={{
              height: 30,
              width: 30,
              textTransform: "uppercase",
              backgroundColor: "secondary.main",
              color: showMenu ? "primary.main" : "primary.dark",
              transition: "color 1s linear",
            }}
          >
            <Typography variant='label' sx={{ fontWeight: 500 }}>
              {username.charAt(0)}
            </Typography>
          </Avatar>
        </Tooltip>
        <Typography
          className='flexRow'
          variant='label'
          sx={{
            color: "background.primary",
            fontWeight: 700,
            display: { xxs: "none", sm: "flex" },
            [mobileLandscape]: { display: "flex" },
          }}
        >
          {username}
        </Typography>
        {variant === "navbar" && (
          <Tooltip title='Sign Out'>
            <IconButton
              className='flexRow'
              variant='primary'
              onClick={handleLogOut}
              sx={{
                display: { xxs: "none", mobile: "flex" },
                [mobileLandscape]: { display: "flex" },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </>
  );
}

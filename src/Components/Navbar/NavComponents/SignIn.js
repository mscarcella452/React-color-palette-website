import { useState, useContext } from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { md } from "../../../Theme/mediaQueries";
import FormDialog from "../AthenticationDialog/FormDialog";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { UIContext, UIDispatchContext } from "../../../Context/AppContext";

function SignIn() {
  const { currentUser } = useContext(UIContext);
  const { username, loggedIn } = currentUser;
  const largeScreen = useMediaQuery(md);
  return (
    <Box
      className='flexRow'
      sx={{
        height: 1,
        gap: "10px",
        display: { xxs: "none", mobile: "flex" },
        justifyContent: "flex-end",
      }}
    >
      {!loggedIn && (
        <>
          {largeScreen && <FormDialog variant='signUp' buttonHeight={"35px"} />}
          <FormDialog
            variant='logIn'
            navBarSm={!largeScreen}
            buttonHeight={"35px"}
          />
        </>
      )}
      {loggedIn && <Username username={username} />}
    </Box>
  );
}
{
  /* <>
  <AccountCircleIcon sx={{ color: "info.dark" }} />
  <Typography
    variant='heading1'
    sx={{ fontWeight: 500, marginRight: "2.5px" }}
  >
    {username}
  </Typography>
  <ArrowDropDownIcon sx={{ color: "info.dark" }} />
</> */
}

export default SignIn;

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

export function Username({ username }) {
  const UIDispatch = useContext(UIDispatchContext);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [selectedIndex, setSelectedIndex] = useState(1);
  // const open = Boolean(anchorEl);
  const handleClickListItem = event => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    // setSelectedIndex(index);
    // setAnchorEl(null);
    UIDispatch({ type: "log_out" });
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <List component='nav' aria-label='Device settings'>
        <ListItem
          className='flexRow'
          // button
          id='lock-button'
          // aria-haspopup='listbox'
          // aria-controls='lock-menu'
          // aria-label='when device is locked'
          // aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ gap: { xxs: "5px", md: "10px" }, cursor: "pointer" }}
        >
          {/* <AccountCircleIcon sx={{ color: "info.dark" }} /> */}
          <Avatar
            sx={{
              width: 32,
              height: 32,
              textTransform: "uppercase",
              backgroundColor: "info.main",
              color: "primary.main",
            }}
          >
            {username.charAt(0)}
          </Avatar>
          <Typography
            variant='label'
            sx={{
              fontWeight: 500,
              marginRight: "2.5px",
              display: { xxs: "none", md: "block" },
              // color: "fontColor.primary",
            }}
          >
            {username}
          </Typography>
          <ArrowDropDownIcon sx={{ color: "highlight.main" }} />
        </ListItem>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        // MenuListProps={{
        //   "aria-labelledby": "lock-button",
        //   role: "listbox",
        // }}
      >
        <MenuItem onClick={handleMenuItemClick}>
          <ListItemIcon>
            <AccountCircleIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>
            <Typography variant='label' color='text.secondary'>
              Profile
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuItemClick}>
          <ListItemIcon>
            <LogoutIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>
            <Typography variant='label' color='text.secondary'>
              Sign Out
            </Typography>
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

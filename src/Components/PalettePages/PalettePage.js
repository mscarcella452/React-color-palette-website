import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Container, Typography, Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import SearchBar from "./PaletteComponents/SearchBar";
import { colorPalettes } from "./SeedColors";
import PaletteGrid from "./PaletteComponents/PaletteGrid";
import { UIContext } from "../../Context/AppContext";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import AuthenticationDialog from "../Navbar/AthenticationDialog/AuthenticationDialog";
import FormDialog from "../Navbar/AthenticationDialog/FormDialog";

const navButtons = [
  { name: "Sign Up", btnVariant: "primary", dialogVariant: "signUp" },
  { name: "Log In", btnVariant: "secondary", dialogVariant: "logIn" },
];

function PalettePage() {
  const { users, currentUser } = useContext(UIContext);
  const { loggedIn, palettes } = currentUser;

  // save current user as index in users instead of object with all that info. still need signed in tho, same thing for remember me
  // const { signedIn, palettes } = currentUser;
  return (
    <Paper variant='pagePaper'>
      <Navbar />
      <Box
        className='flexColumn'
        sx={{
          padding: "2rem",
          top: "70px",
          width: 1,
          position: "sticky",

          zIndex: 1,
          background: "#fff",
        }}
      >
        <Container disableGutters sx={{ flexDirection: "column", gap: "1rem" }}>
          <Typography variant='heading1' sx={{ width: 1, fontWeight: 600 }}>
            Palettes:
          </Typography>
          <SearchBar />
        </Container>
      </Box>
      <Container
        disableGutters
        sx={{ height: "max-content", padding: "0 1rem" }}
      >
        {(!loggedIn || !palettes.length) && (
          <Box
            className='flexColumn'
            sx={{
              padding: "1rem",
              width: "600px",
              height: "250px",
              backgroundColor: "background.secondary",
              borderRadius: "10px",
              justifyContent: "space-around",
            }}
          >
            <AnnouncementIcon
              sx={{ color: "secondary.main", fontSize: "4rem" }}
            />
            <Typography
              variant='heading1'
              sx={{ fontWeight: 600, textTransform: "none" }}
            >
              Log In or Sign Up to use palettes.
            </Typography>
            <Container
              disableGutters
              sx={{
                width: "400px",
                height: "40px",
                gap: "1rem",
              }}
            >
              <FormDialog variant='signUp' />
              <FormDialog variant='logIn' />
            </Container>
          </Box>
        )}
        {loggedIn && palettes.length && <PaletteGrid palettes={palettes} />}
      </Container>
    </Paper>
  );
}

export default PalettePage;

// for checking sign ups
// <Container disableGutters sx={{ height: "max-content", padding: "0 1rem" }}>
//   {users.map((user, index) => (
//     <Box className='flexColumn' key={uuidv4()}>
//       <Typography variant='heading1' sx={{ fontWeight: 600 }}>
//         user #:{index + 1}
//       </Typography>
//       <Typography sx={{ width: 1 }}>username: {user.username}</Typography>
//       <Typography sx={{ width: 1 }}>email: {user.email}</Typography>
//       <Typography sx={{ width: 1 }}>password: {user.password}</Typography>
//       {/* <Typography variant='heading1' sx={{ fontWeight: 600 }}>
//             user #:{index + 1} palettes:
//           </Typography> */}
//       {/* {user.palettes.map(palette => (
//             <Typography sx={{ width: 1 }}>{palette.paletteName}</Typography>
//           ))} */}
//       <Typography sx={{ width: 1, fontWeight: 600 }}>
//         --------------------------------
//       </Typography>
//     </Box>
//   ))}
// </Container>;

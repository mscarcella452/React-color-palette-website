import { useRef } from "react";
import PaletteList from "../../Helpers/PaletteList/PaletteList";
import { Box, Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import FailedSearchResult from "../../Helpers/PaletteList/Components/FailedSearchResult";

function UserPalettesPage({ palettes }) {
  const footerRef = useRef();
  return (
    <Paper variant='pagePaper'>
      <Navbar />
      <PaletteList palettes={palettes} footerRef={footerRef} />
      {/* <Box
        className='flexColumn'
        sx={{ height: "calc(100vh - 70px)", width: 1 }}
      >
        <FailedSearchResult onClick={() => console.log("hey")} />
      </Box> */}
      <Box
        ref={footerRef}
        sx={{
          width: 1,
          height: "300px",
          background: "green",
          border: 1,
        }}
      >
        footer
      </Box>
    </Paper>
  );
}

export default UserPalettesPage;

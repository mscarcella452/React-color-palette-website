import { useRef } from "react";
import { Box, Paper } from "@mui/material";
import PaletteList from "../../Helpers/PaletteList/PaletteList";
import Navbar from "../Navbar/Navbar";
import FailedSearchResult from "../../Helpers/PaletteList/Components/FailedSearchResult";
import { templatePalettes } from "../../Palettes/templatePalettes";

function TemplatePage() {
  const footerRef = useRef();
  return (
    <Paper variant='pagePaper'>
      <Navbar />
      <PaletteList palettes={templatePalettes} footerRef={footerRef} />
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

export default TemplatePage;

//  <Paper
//   sx={{
//     backgroundColor: "background.primary",
//     position: "relative",
//     height: "100vh",
//     width: 1,
//     zIndex: 2,
//   }}
// >
//   <Navbar />
//   <PaletteList palettes={palettes} footerRef={footerRef} />
//   {/* <Box
//         className='flexColumn'
//         sx={{ height: "calc(100vh - 70px)", width: 1 }}
//       >
//         <FailedSearchResult onClick={() => console.log("hey")} />
//       </Box> */}
//   <Box
//     ref={footerRef}
//     sx={{
//       width: 1,
//       height: "300px",
//       background: "green",
//       border: 1,
//     }}
//   >
//     footer
//   </Box>
// </Paper>

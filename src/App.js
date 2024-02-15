import logo from "./logo.svg";
import { Box } from "@mui/material";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./Theme/ThemeContext";
import { AlertContextProvider } from "./Context/AlertContext";
import PalettePage from "./Components/PalettePages/PalettePage";
import TemplatePage from "./Components/TemplatePage/TemplatePage";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/HomePage/Navbar";

import { templatePalettes } from "./Palettes/templatePalettes";

function App() {
  return (
    <div className='App' style={{ height: "100vh" }}>
      <ThemeProvider theme={appTheme}>
        {/* <Navbar /> */}
        {/* <AlertContextProvider></AlertContextProvider> */}

        {/* <HomePage /> */}
        <TemplatePage palettes={templatePalettes} />
        {/* <InfiniteScrollDemo /> */}
        {/* <PalettePage /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;

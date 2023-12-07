import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./Theme/ThemeContext";
import { AlertContextProvider } from "./Context/AlertContext";
import PalettePage from "./Components/PalettePages/PalettePage";
import { Box } from "@mui/material";

function App() {
  return (
    <div className='App flexRow' style={{ height: "100vh" }}>
      <ThemeProvider theme={appTheme}>
        {/* <AlertContextProvider></AlertContextProvider> */}

        <PalettePage />
      </ThemeProvider>
    </div>
  );
}

export default App;

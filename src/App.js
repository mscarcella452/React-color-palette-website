import { useRef, useEffect, useLayoutEffect } from "react";
import { Box, Paper } from "@mui/material";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./Theme/ThemeContext";
import { AlertContextProvider } from "./Context/AlertContext";
import PalettePage from "./Components/PalettePages/PalettePage";
import TemplatePage from "./Components/TemplatePage/TemplatePage";
import UserPalettesPage from "./Components/UserPalettesPage/UserPalettesPage";
import HomePage from "./Components/HomePage/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import { templatePalettes } from "./Palettes/templatePalettes";
import { userPalettes } from "./Palettes/userPalettes";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/userPalettes'
          element={<UserPalettesPage palettes={userPalettes} />}
        />
        <Route
          path='/templates'
          element={<TemplatePage palettes={templatePalettes} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

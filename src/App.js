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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/userPalettes' element={<UserPalettesPage />} />
        <Route path='/templatePalettes' element={<TemplatePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

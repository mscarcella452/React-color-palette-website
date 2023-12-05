import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./Theme/ThemeContext";
import { AlertContextProvider } from "./Context/AlertContext";

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={appTheme}>
        <AlertContextProvider>{/* alert provider */}</AlertContextProvider>
        my color palette website
      </ThemeProvider>
    </div>
  );
}

export default App;

// theme.js
import { createTheme } from "@mui/material/styles";

// Define light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FEFEFE",
    },
    secondary: {
      main: "#FEFEFE",
    },
    background: {
      default: "#FEFEFE",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

// Define dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#23272F",
    },
    secondary: {
      main: "#16181D",
    },
    background: {
      default: "#23272F",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export { lightTheme, darkTheme };

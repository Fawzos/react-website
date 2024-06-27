import { Container, Paper, ThemeProvider } from "@mui/material";
import TopBar from "./Components/AppBar/TopBar";
import Section from "./Components/Section/Section";
import sectionConfig from "./Components/Section/SectionConfig";
import GlobalCssBaseline from "./styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import { lightTheme, darkTheme } from "./styles/theme";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalCssBaseline />
      <TopBar />
      {/* <ThemeToggleButton /> */}
      <Outlet />

      <Footer />
    </ThemeProvider>
  );
}

export default App;

// ThemeToggleButton.js
import React, { useContext } from "react";
import { Button } from "@mui/material";
import { ThemeContext } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} variant="contained" color="primary">
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </Button>
  );
};

export default ThemeToggleButton;

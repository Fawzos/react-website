import React from "react";
import { createGlobalStyle } from "styled-components";
import { CssBaseline, GlobalStyles as MuiGlobalStyles } from "@mui/material";

// Ensure to add this link to your index.html or public/index.html
// <link href="https://fonts.googleapis.com/css2?family=Optimistic+Display:wght@400;700&display=swap" rel="stylesheet">

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Optimistic Display', -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    background-color: #232730;
  }
`;

export default function GlobalCssBaseline() {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles
        styles={{
          "*": { margin: 0, padding: 0, boxSizing: "border-box" },
          fontFamily:
            "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        }}
      />
      <GlobalStyles />
    </>
  );
}

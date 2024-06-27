import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-around">
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Meta Open Source
            </Typography>
            <Typography variant="body2" color="textSecondary">
              &copy; 2024
            </Typography>
            <Typography component="a" href="https://opensource.fb.com/">
              Meta Open Source
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Learn React
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                component="a"
                href="https://react.dev/learn"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Quick Start
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/learn/installation"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Installation
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/learn/describing-the-ui"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Describing the UI
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/learn/adding-interactivity"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Adding Interactivity
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/learn/managing-state"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Managing State
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/learn/escape-hatches"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Escape Hatches
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              API Reference
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                component="a"
                href="https://react.dev/reference/react"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                React APIs
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/reference/react-dom"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                React DOM APIs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                component="a"
                href="https://react.dev/community/code-of-conduct"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Code of Conduct
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/community/team"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Meet the Team
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/community/contributors"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Docs Contributors
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/community/acknowledgements"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Acknowledgements
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              More
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                component="a"
                href="https://react.dev/blog"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Blog
              </Typography>
              <Typography
                component="a"
                href="https://reactnative.dev/"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                React Native
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/privacy"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Privacy
              </Typography>
              <Typography
                component="a"
                href="https://react.dev/terms"
                color="inherit"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Terms
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

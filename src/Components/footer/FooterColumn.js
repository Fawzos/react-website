import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FooterLink from "./FooterLinks";
// import FooterLink from "./FooterLink";

const FooterColumn = ({ title, links }) => {
  return (
    <Grid item xs={12} sm={4} md={2}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </Box>
    </Grid>
  );
};

export default FooterColumn;

import { Typography } from "@mui/material";
import React from "react";

const FooterLink = ({ href, children }) => {
  return (
    <Typography
      component="a"
      href={href}
      color="inherit"
      variant="body2"
      sx={{ textDecoration: "none" }}
    >
      {children}
    </Typography>
  );
};

export default FooterLink;

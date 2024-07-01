import { styled } from "@mui/material";

export const StyledImage = styled("img")(({ theme }) => ({
  height: "330px",
  // maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "80px",
  },
}));

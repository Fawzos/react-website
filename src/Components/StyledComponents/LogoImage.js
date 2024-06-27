import { styled } from "@mui/material";

export const LogoImage = styled("img")(({ theme }) => ({
  width: "37px",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "25px",
  },
}));

import { Box, styled } from "@mui/material";

export const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  order: 2,
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

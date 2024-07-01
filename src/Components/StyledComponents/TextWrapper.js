import { Box, styled } from "@mui/material";

export const TextWrapper = styled(Box)(({ theme, order, isMobile }) => ({
  order: order === "first" ? 2 : 1,
  textAlign: "center",
  width: isMobile ? "100%" : "650px",
  margin: theme.spacing(3, 0),
}));

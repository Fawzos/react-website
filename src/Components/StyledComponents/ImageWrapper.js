import { Box, styled } from "@mui/material";

export const ImageWrapper = styled(Box)(({ theme }) => ({
  height: "auto",
  maxWidth: "100%",
  borderRadius: theme.shape.borderRadius,
  order: 1,
}));

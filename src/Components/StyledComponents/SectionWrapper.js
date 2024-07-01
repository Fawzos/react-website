import { Box, styled } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3px",
  color: "white",
  fontFamily: "Optimistic Display",
  padding: theme.spacing(17, 0),
}));

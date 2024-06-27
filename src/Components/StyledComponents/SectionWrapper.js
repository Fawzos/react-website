import { Box, styled } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(17, 0),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3px",
  color: "white",
  fontFamily: "Optimistic Display",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(15, 2),
  },
}));

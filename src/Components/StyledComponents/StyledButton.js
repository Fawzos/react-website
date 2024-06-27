import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(
  ({ theme, bgColor, color, borderRadius, border }) => ({
    backgroundColor: bgColor || theme.palette.primary.main,
    color: theme.palette.primary.light,
    borderRadius: borderRadius || theme.shape.borderRadius,
    border: border,
    padding: theme.spacing(1, 3),
    margin: "37px 7px",
    height: "47px",
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: bgColor
        ? theme.palette.augmentColor({ color: { main: bgColor } }).dark
        : theme.palette.primary.dark,
    },
  })
);

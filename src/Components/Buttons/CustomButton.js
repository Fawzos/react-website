import React from "react";
import { StyledButton } from "../StyledComponents/StyledButton";

const CustomButton = ({
  children,
  bgColor,
  color,
  borderRadius,
  border,
  ...props
}) => (
  <StyledButton
    sx={{ color: color, border: border }}
    bgColor={bgColor}
    borderRadius={borderRadius}
    {...props}
  >
    {children}
  </StyledButton>
);

export default CustomButton;

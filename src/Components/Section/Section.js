import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { SectionWrapper } from "../StyledComponents/SectionWrapper";
import { ImageWrapper } from "../StyledComponents/ImageWrapper";
import { StyledImage } from "../StyledComponents/StyledImage";
import { TextWrapper } from "../StyledComponents/TextWrapper";

const Section = ({
  backgroundColor,
  title,
  img,
  order,
  subTitle,
  btn,
  discription,
  darkBtn,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionWrapper sx={{ backgroundColor }}>
      {img && (
        <ImageWrapper order={order}>
          <StyledImage src={img} alt={title} order={order} />
        </ImageWrapper>
      )}
      <TextWrapper order={order} isMobile={isMobile}>
        {title && (
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              fontSize: isMobile ? "32px" : "52px",
              fontWeight: "400",
            }}
          >
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              fontSize: isMobile ? "16px" : "20px",
              maxWidth: isMobile ? "100%" : "48rem",
            }}
          >
            {subTitle}
          </Typography>
        )}
        {discription && (
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? "16px" : "20px",
              textAlign: isMobile ? "left" : "center",
            }}
          >
            {discription}
          </Typography>
        )}
      </TextWrapper>
      <Box sx={{ order: 4 }}>
        {btn && btn}
        {darkBtn && darkBtn}
      </Box>
    </SectionWrapper>
  );
};

export default Section;

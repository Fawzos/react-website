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
        <ImageWrapper
          sx={{
            order: order === "first" ? 1 : 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center ",
          }}
        >
          <StyledImage
            src={img}
            alt={title}
            sx={{
              width: order === "first" ? "100px" : "1208px",
              height: order === "first" ? "100px" : "322px",
              my: 5,
            }}
          />
        </ImageWrapper>
      )}
      <TextWrapper sx={{ order: order === "first" ? 2 : 1 }}>
        {title && (
          <Typography
            gutterBottom
            sx={{
              width: isMobile ? "100%" : "650px",
              textAlign: "center",
              fontSize: isMobile ? "32px" : "52px",
              fontWeight: "400",
              fontFamily: "Optimistic Display",
            }}
          >
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography
            gutterBottom
            sx={{
              fontSize: isMobile ? "16px" : "20px",
              maxWidth: isMobile ? "100%" : "48rem",
              textAlign: isMobile ? "left" : "center",
            }}
          >
            {subTitle}
          </Typography>
        )}
      </TextWrapper>
      {discription && (
        <Typography
          sx={{
            width: isMobile ? "100%" : "650px",
            fontSize: isMobile ? "16px" : "20px",
            textAlign: isMobile ? "left" : "center",
            fontFamily: "Optimistic Display",
            order: 3,
          }}
        >
          {discription}
        </Typography>
      )}
      <Box sx={{ order: 4 }}>
        {btn && btn}
        {darkBtn && darkBtn}
      </Box>
    </SectionWrapper>
  );
};

export default Section;

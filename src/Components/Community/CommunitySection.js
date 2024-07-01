import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CommunityImagesGrid from "./CommunityImagesGrid";
import CommunityTextContent from "./CommunityTextContent";

const CommunitySection = () => {
  const imagesSets = [
    [
      { src: "https://via.placeholder.com/600x400?text=Image+1" },
      { src: "https://via.placeholder.com/600x400?text=Image+2" },
      { src: "https://via.placeholder.com/600x400?text=Image+3" },
    ],
    [
      { src: "https://via.placeholder.com/600x400?text=Image+4" },
      { src: "https://via.placeholder.com/600x400?text=Image+5" },
      { src: "https://via.placeholder.com/600x400?text=Image+6" },
    ],
    [
      { src: "https://via.placeholder.com/600x400?text=Image+1" },
      { src: "https://via.placeholder.com/600x400?text=Image+2" },
      { src: "https://via.placeholder.com/600x400?text=Image+3" },
    ],
  ];

  return (
    <Box sx={{ backgroundColor: "#181a1b", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div>
              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  textAlign: "center",
                  mt: 4,
                  fontWeight: 700,
                  fontFamily:
                    "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                }}
              >
                Join a community of millions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(246, 247, 249, 0.8)",
                  textAlign: "center",
                  mt: 2,
                  mb: 4,
                  fontSize: "18px",
                  fontFamily:
                    "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                }}
              >
                You're not alone. Two million developers from all over the world
                visit the React docs every month. React is something that people
                and teams can agree on.
              </Typography>
            </div>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={2000} // Adjust interval as needed (in milliseconds)
                showArrows={false} // Hide navigation arrows if not needed
                stopOnHover={false} // Allow autoplay to continue on hover
                transitionTime={500} // Duration of slide transition (in milliseconds)
                emulateTouch // Allow touch swipe on mobile devices
              >
                {imagesSets.map((images, index) => (
                  <div key={index}>
                    <CommunityImagesGrid images={images} />
                  </div>
                ))}
              </Carousel>
            </Grid>
            <CommunityTextContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunitySection;

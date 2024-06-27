import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CommunitySection = () => {
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
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+1"
                        alt="Community Image 1"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+2"
                        alt="Community Image 2"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+3"
                        alt="Community Image 3"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+4"
                        alt="Community Image 4"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+5"
                        alt="Community Image 5"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+6"
                        alt="Community Image 6"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+1"
                        alt="Community Image 1"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+2"
                        alt="Community Image 2"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src="https://via.placeholder.com/600x400?text=Image+3"
                        alt="Community Image 3"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Carousel>
            </Grid>
            <div>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(246, 247, 249, 0.8)",
                  textAlign: "center",
                  mt: 2,
                  fontSize: "16px",
                  fontFamily:
                    "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                }}
              >
                This is why React is more than a library, an architecture, or
                even an ecosystem. React is a community. It’s a place where you
                can ask for help, find opportunities, and meet new friends. You
                will meet both developers and designers, beginners and experts,
                researchers and artists, teachers and students. Our backgrounds
                may be very different, but React lets us all create user
                interfaces together.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunitySection;

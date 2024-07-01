import React from "react";
import { Grid } from "@mui/material";

const CommunityImagesGrid = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid key={index} item xs={12} md={4}>
          <img
            src={image.src}
            alt={`Community Image ${index + 1}`}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CommunityImagesGrid;

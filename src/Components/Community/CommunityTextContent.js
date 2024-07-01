import React from "react";
import { Typography } from "@mui/material";

const CommunityTextContent = () => {
  return (
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
        This is why React is more than a library, an architecture, or even an
        ecosystem. React is a community. It’s a place where you can ask for
        help, find opportunities, and meet new friends. You will meet both
        developers and designers, beginners and experts, researchers and
        artists, teachers and students. Our backgrounds may be very different,
        but React lets us all create user interfaces together.
      </Typography>
    </div>
  );
};

export default CommunityTextContent;

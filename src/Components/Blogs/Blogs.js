import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogSlice";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CircularProgress sx={{ color: "red", marginBottom: "20px" }} />
        <Typography>Loading ... </Typography>
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "12px",
          color: "#51B0C6",
        }}
      >
        <Typography variant="body1">Blog</Typography>
        <KeyboardArrowRightIcon />
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: "#f6f7f9",
          fontWeight: 700,
          fontFamily:
            "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        }}
      >
        React Blog
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(246, 247, 249, 0.8)",
          fontSize: "20px",
          fontFamily:
            "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
          marginBottom: "27px",
        }}
      >
        This blog is the official source for updates from the React team.
        Anything important, including release notes or deprecation notices, will
        be posted here first. You can also follow the @reactjs account on
        Twitter, but you won’t miss anything essential if you only read this
        blog.
      </Typography>

      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} key={blog.id}>
            <SingleBlog blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;

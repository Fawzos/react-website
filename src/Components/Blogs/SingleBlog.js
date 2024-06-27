import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blogs/:id");
  };
  return (
    <Container>
      <Card
        sx={{
          borderColor: "#404756",
          backgroundColor: "#232730",
          borderRadius: "8px",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ color: "#f6f7f9", fontWeight: 600 }}>
            {blog.title}
          </Typography>
          <Typography
            sx={{ fontSize: "15px", color: "#98A0B2", margin: "12px 0" }}
          >
            May 22, 2024
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "rgba(246, 247, 249, 0.8)", marginTop: "8px" }}
          >
            {blog.body}
          </Typography>

          <Button
            variant="text"
            sx={{ color: "#56BFD6", textTransform: "none" }}
            onClick={handleClick}
          >
            Read more
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleBlog;

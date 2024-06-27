import { Box, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import TranslateIcon from "@mui/icons-material/Translate";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThemeToggleButton from "../../styles/ThemeToggleButton";

const navItems = [
  { label: "Learn", path: "/learn" },
  { label: "Refrence", path: "/refrence" },
  { label: "Community", path: "/community" },
  { label: "Blog", path: "/blogs" },
];

const MenuWrapper = styled(Box)(({ theme }) => ({}));

function MenuBar({ ...props }) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <MenuWrapper>
      {navItems.map((item) => (
        <Button
          key={item.label}
          sx={{
            color: "#fff",
            padding: "0px 12px",
            fontSize: "15px",
          }}
          onClick={() => handleClick(item.path)}
        >
          {item.label}
        </Button>
      ))}
      <IconButton sx={{ margin: "0 20px" }}>
        <Brightness4Icon />
      </IconButton>
      <IconButton sx={{ margin: "0 20px" }}>
        <TranslateIcon />
      </IconButton>
      <IconButton sx={{ margin: "0 20px" }}>
        <GitHubIcon />
      </IconButton>
    </MenuWrapper>
  );
}

export default MenuBar;

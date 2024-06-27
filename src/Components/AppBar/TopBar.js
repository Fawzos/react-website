import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";
import { TopbarContainer } from "../StyledComponents/TopbarContainer";
import { DrawerHeader } from "../StyledComponents/DrawerHeader";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DrawerHeader>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        <ListItem button component="a" href="https://react.dev/learn">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Learn" />
        </ListItem>
        <ListItem button component="a" href="https://react.dev/reference/react">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Reference" />
        </ListItem>
        <ListItem button component="a" href="https://react.dev/community">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Community" />
        </ListItem>
        <ListItem button component="a" href="blogs">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#232730" }}>
      <Toolbar
        disableGutters
        sx={{
          width: "100%",
          margin: 0,
          padding: "0px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TopbarContainer>
          <Logo />
          <Typography
            sx={{
              margin: 0,
              padding: 0,
              color: "rgb(153 161 179)",
              fontSize: "0.8rem",
              "&:hover": { color: "#58C4DC", cursor: "pointer" },
            }}
            component="a"
            href="https://react.dev/versions"
          >
            v18.3.1
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ marginLeft: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "240px",
                    backgroundColor: "#232730",
                    color: "rgb(153 161 179)",
                  },
                }}
              >
                {drawerList}
              </Drawer>
            </>
          ) : (
            <>
              <SearchBar />
              <MenuBar />
            </>
          )}
        </TopbarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

interface IProps {
  isOnDarkMode: boolean;
  setIsOnDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const pages: string[] = ["Home", "About", "Contact"];

export default function Header({
  isOnDarkMode,
  setIsOnDarkMode,
  open,
  setOpen,
}: IProps) {
  const handleDrawerToggle = () => setOpen(open === true ? false : true);
  const switchDarkMode = () => setIsOnDarkMode(isOnDarkMode ? false : true);

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{ height: "64px" }}>
          <IconButton
            edge="start"
            aria-label="Toggle menu"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: { xs: "center", md: "left" },
            }}
            component="div"
          >
            <Typography variant="h6" noWrap component="div">
              RE-STORE
            </Typography>
          </Box>

          <Tooltip
            sx={{ float: "right" }}
            title={`Switch to ${isOnDarkMode ? "ligth" : "dark"} mode`}
          >
            <IconButton size="small" onClick={switchDarkMode} color="inherit">
              {isOnDarkMode ? <Brightness7Icon /> : <NightsStayIcon />}
            </IconButton>
          </Tooltip>

          <Box
            sx={{
              float: "right",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ m: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

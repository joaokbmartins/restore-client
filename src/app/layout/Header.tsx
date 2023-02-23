import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import {useState} from "react";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import {Tooltip} from "@mui/material";

interface IProps {
  isOnDarkMode: boolean;
  setIsOnDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const pages: string[] = ["Home", "About", "Contact"];

export default function Header({ isOnDarkMode, setIsOnDarkMode }: IProps) {
  const [open, setOpen] = useState(false);

  const switchDarkMode = () => setIsOnDarkMode(isOnDarkMode ? false : true);
  const handleDrawerToggle = () => setOpen(open === true ? false : true);

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{ height: "64px" }}>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            component="div"
          >
            <IconButton
              aria-label="Toggle menu"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

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

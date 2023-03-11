import {
  AppBar,
  Badge,
  Box,
  Button,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { IPathMenu } from "./AppMenu/MenuList";

interface IProps {
  isOnDarkMode: boolean;
  setIsOnDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const headerLinks: IPathMenu[] = [
  { label: "Catalog", path: "/catalog", icon: "shopping_basket" },
  { label: "About", path: "/about", icon: "info" },
  { label: "Contact", path: "/contact", icon: "call" },
];

const cartLink: IPathMenu = {
  label: "Cart",
  path: "/cart",
  icon: "shopping_cart",
  notificationCount: 300,
};

export default function Header({
  isOnDarkMode,
  setIsOnDarkMode,
  open,
  setOpen,
}: IProps) {
  const handleDrawerToggle = () => setOpen(open === true ? false : true);
  const switchDarkMode = () => setIsOnDarkMode(isOnDarkMode ? false : true);

  const linkStyles = {
    m: 1,
    color: "white",
    display: "block",
    "&:hover": {
      backgroundColor: "secondary.main",
      color: "lightblue",
    },
    "&.active": {
      backgroundColor: "secondary.main",
    },
  };

  return (
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
          <Icon>menu</Icon>
        </IconButton>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: { xs: "center", md: "left" },
            textDecoration: "none",
            color: "white",
          }}
          component={NavLink}
          to="/"
        >
          <Typography variant="h6" noWrap component="div">
            RE-STORE
          </Typography>
        </Box>

        <Box
          sx={{
            float: "right",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          {headerLinks.map(({ label, path }, index) => (
            <Button key={index} sx={linkStyles} component={NavLink} to={path}>
              {label}
            </Button>
          ))}

          <Button
            component={NavLink}
            to={cartLink.path}
            sx={{
              ...linkStyles,
              "&:hover": {
                backgroundColor: "none",
                color: "secondary.main",
              },
            }}
          >
            <Badge
              badgeContent={cartLink.notificationCount}
              max={99}
              color="secondary"
            >
              <Icon>{cartLink.icon}</Icon>
            </Badge>
          </Button>
        </Box>

        <Tooltip
          sx={{
            float: "right",
            "&:hover": {
              color: isOnDarkMode ? "gold" : "silver",
              backgroundColor: isOnDarkMode ? "#999900" : "#f0f0f0",
            },
          }}
          title={`Switch to ${isOnDarkMode ? "ligth" : "dark"} mode`}
        >
          <IconButton size="small" onClick={switchDarkMode} color="inherit">
            {isOnDarkMode ? <Brightness7Icon /> : <NightsStayIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

import {
  Badge,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export interface IPathMenu {
  label: string;
  path: string;
  icon: string;
  notificationCount?: number;
}

export default function MenuList() {
  const menuPaths: IPathMenu[] = [
    { label: "Home", path: "/", icon: "home" },
    { label: "About", path: "/about", icon: "info" },
    { label: "Contact", path: "/contact", icon: "call" },
    { label: "Register", path: "/register", icon: "person_add" },
    { label: "Login", path: "/login", icon: "login" },
    { label: "Catalog", path: "/catalog", icon: "shopping_basket" },
    {
      label: "Cart",
      path: "/cart",
      icon: "shopping_cart",
      notificationCount: 454,
    },
  ];

  return (
    <>
      <List>
        {menuPaths.map(({ label, path, icon, notificationCount }, index) => (
          <Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to={path}>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={label} />
                <Badge
                  sx={{ m: 2 }}
                  badgeContent={notificationCount}
                  color="secondary"
                ></Badge>
              </ListItemButton>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </>
  );
}

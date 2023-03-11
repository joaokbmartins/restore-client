import InboxIcon from "@mui/icons-material/MoveToInbox";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { pages } from "../Header";

export default function MenuList() {
  return (
    <>
      <List>
        {pages.map((text, index) => (
          <>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
}

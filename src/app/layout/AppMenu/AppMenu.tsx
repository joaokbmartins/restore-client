import { Drawer } from "@mui/material";

import MenuList from "./MenuList";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const drawerWidth = 240;

export default function AppMenu({ open, setOpen }: IProps) {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: `64px`,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        onMouseLeave={() => setOpen(false)}
      >
        <MenuList />
      </Drawer>
    </>
  );
}

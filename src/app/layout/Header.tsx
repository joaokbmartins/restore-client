import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">RE-STORE</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

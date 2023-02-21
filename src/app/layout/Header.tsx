import {
  AppBar,
  Box,
  createTheme,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";

import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Tooltip } from "@mui/material";

interface IProps {
  themeMode: Partial<Theme>;
  setThemeMode: React.Dispatch<React.SetStateAction<Partial<Theme>>>;
}

export default function Header({ themeMode, setThemeMode }: IProps) {
  const theme = themeMode.palette?.mode;

  const switchTheme = () => {
    setThemeMode(
      createTheme({
        palette: {
          mode: theme === "light" ? "dark" : "light",
        },
      })
    );
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RE-STORE
          </Typography>
          <Tooltip
            sx={{ float: "right" }}
            title={`Switch to ${theme === "light" ? "dark" : "ligth"} mode`}
          >
            <IconButton size="small" onClick={switchTheme} color="inherit">
              {theme === "light" ? <NightsStayIcon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </>
  );
}

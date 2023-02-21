import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { Tooltip } from "@mui/material";

interface IProps {
  hasDarkMode: boolean;
  setHasDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ hasDarkMode, setHasDarkMode }: IProps) {
  const switchDarkMode = () => setHasDarkMode(hasDarkMode ? false : true);

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RE-STORE
          </Typography>
          <Tooltip
            sx={{ float: "right" }}
            title={`Switch to ${hasDarkMode ? "ligth" : "dark"} mode`}
          >
            <IconButton size="small" onClick={switchDarkMode} color="inherit">
              {hasDarkMode ? <Brightness7Icon /> : <NightsStayIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </>
  );
}

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { Tooltip } from "@mui/material";

interface IProps {
  isOnDarkMode: boolean;
  setIsOnDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isOnDarkMode, setIsOnDarkMode }: IProps) {
  const switchDarkMode = () => setIsOnDarkMode(isOnDarkMode ? false : true);

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RE-STORE
          </Typography>
          <Tooltip
            sx={{ float: "right" }}
            title={`Switch to ${isOnDarkMode ? "ligth" : "dark"} mode`}
          >
            <IconButton size="small" onClick={switchDarkMode} color="inherit">
              {isOnDarkMode ? <Brightness7Icon /> : <NightsStayIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </>
  );
}

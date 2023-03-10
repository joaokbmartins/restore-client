import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import AppMenu from "./AppMenu/AppMenu";

import Header from "./Header";
import MainContent from "./MainContent";

function App() {
  const [open, setOpen] = useState(false);
  const [isOnDarkMode, setIsOnDarkMode] = useState<boolean>(false);
  const mode = isOnDarkMode ? "dark" : "light";

  const theme = createTheme({
    palette: { mode },
    typography: {
      fontFamily: ["Arial", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header
        isOnDarkMode={isOnDarkMode}
        setIsOnDarkMode={setIsOnDarkMode}
        open={open}
        setOpen={setOpen}
      />

      <AppMenu open={open} setOpen={setOpen} />

      <MainContent open={open} />
    </ThemeProvider>
  );
}

export default App;

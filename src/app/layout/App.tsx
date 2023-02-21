import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

import Catalog from "../../features/catalog/Catalog";

import Header from "./Header";

function App() {
  const [hasDarkMode, setHasDarkMode] = useState<boolean>(false);
  const mode = hasDarkMode ? "dark" : "light";

  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header hasDarkMode={hasDarkMode} setHasDarkMode={setHasDarkMode} />

      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;

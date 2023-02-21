import {
  Container,
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

import Catalog from "../../features/catalog/Catalog";

import Header from "./Header";

function App() {
  const [themeMode, setThemeMode] = useState<Partial<Theme>>(
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />

      <Header themeMode={themeMode} setThemeMode={setThemeMode} />

      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;

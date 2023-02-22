import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import {useState} from "react";
import {Outlet} from "react-router-dom";


import Header from "./Header";

function App() {
  const [isOnDarkMode, setIsOnDarkMode] = useState<boolean>(false);
  const mode = isOnDarkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: isOnDarkMode ? "#121212" : "#fafafa",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header isOnDarkMode={isOnDarkMode} setIsOnDarkMode={setIsOnDarkMode} />

      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;

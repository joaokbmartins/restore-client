import { Container, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { drawerWidth } from "./AppMenu/AppMenu";

interface IProps {
  open: boolean;
}

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));

export default function MainContent({ open }: IProps) {
  return (
    <>
      <Main open={open}>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

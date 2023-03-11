import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

interface IProps {
  open: boolean;
}

export default function MainContent({ open }: IProps) {
  return (
    <>
      <Box>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

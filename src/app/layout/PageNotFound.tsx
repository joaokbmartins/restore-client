import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Typography variant="h4">
          <span>PAGE NOT FOUND. CLICK </span>
          <Link to={"/"}>HERE</Link>
          <span> TO START AGAIN.</span>
        </Typography>
      </Box>
    </>
  );
}

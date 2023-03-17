import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error: any = useRouteError();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Typography variant="h4">Oops!</Typography>
      <Typography>An error has occurred:</Typography>
      <Typography>
        {error.statusText || error.status ? (
          <i>{`${error?.statusText} (${error?.status})`}</i>
        ) : null}
      </Typography>
      <Typography>
        <i>{`${error?.message}`}</i>
      </Typography>
      <Typography>
        Click <Link to={"/"}>here</Link> to return.
      </Typography>
    </Box>
  );
}

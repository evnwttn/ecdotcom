import { Box } from "@mui/material";
import { Body } from ".";
import { appSx } from "../styles";

export const App = () => {
  return (
    <Box sx={appSx.container}>
      <Body />
    </Box>
  );
};

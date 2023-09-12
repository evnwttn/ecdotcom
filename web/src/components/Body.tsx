import { Box } from "@mui/material";
import { Nav, Cover, Press } from ".";
import { appSx } from "../styles";

export const Body = () => {
  return (
    <Box sx={appSx.container.column}>
      <Box sx={appSx.title}>Elder Caius</Box>
      <Box sx={appSx.title.subtitle}>
        <Box>Alien Space Bats / From Below</Box>
        <Box sx={appSx.title.subtitle.available}>
          Available Everywhere
          <Box sx={appSx.title.subtitle.date}>09/14/23</Box>
        </Box>
      </Box>
      <Nav />
      <Cover />
      <Press />
    </Box>
  );
};

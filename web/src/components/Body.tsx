import { Box } from "@mui/material";
import { Nav, Cover } from ".";
import { appSx } from "../styles";

export const Body = () => {
  return (
    <Box sx={appSx.container.column}>
      <Box sx={appSx.title}>Elder Caius</Box>
      {/* <Box sx={appSx.title.subtitle}>
        <Box>SUPER DESTROYER</Box>
        <Box sx={appSx.title.subtitle.available}>
          Available Everywhere
          <Box sx={appSx.title.subtitle.date}>03/01/24</Box>
        </Box>
      </Box> */}
      <Nav />
      <Cover />
      {/* <Press /> */}
    </Box>
  );
};

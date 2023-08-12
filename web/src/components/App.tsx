import { Box } from "@mui/material";
import { Nav, Cover } from ".";
import { appSx } from "../styles";

export const App = () => {
  return (
    <Box sx={appSx.container}>
      <Box sx={appSx.container.column}>
        <Box sx={appSx.title}>Elder Caius</Box>
        <Box sx={appSx.title.subtitle}>
          <Box>Alien Space Bats / From Below</Box>
          <Box sx={appSx.title.subtitle.available}>
            Available Everywhere
            <Box sx={appSx.title.subtitle.date}>14/09/23</Box>
          </Box>
        </Box>
        <Nav />
        <Cover />
        <Box sx={appSx.bio.wrap}>
          <Box sx={appSx.bio.title}>About</Box>
          <Box sx={appSx.bio.body}>
            <Box sx={appSx.bio.div}>
              On March 1st, 2023, ELDER CAIUS released its debut single,{" "}
              <i>Kailash, When It Rises</i> - a sprawling nine-minute odyssey
              pairing dreamy psychedelia with filmscore elements and noise.
              Created as part of the RPM Challenge, <i>Kailash... </i>was
              written and self produced entirely within the month of February.
            </Box>
            <Box sx={appSx.bio.div}>
              This September, double feature{" "}
              <i>Alien Space Bats / From Below</i> plunges into murkier depths
              and surfaces a grime-fuelled prog anomaly. It features the
              finishing touches of legendary mastering engineer, Dan Swanö (
              <a
                href="https://www.unisound.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unisound
              </a>
              ).
            </Box>
            <Box sx={appSx.bio.bottomDiv}>
              ELDER CAIUS is an audio/visual project created by Evan Watton. His
              past projects include the Canadian deathcore band, Ascariasis. He
              lives in St. John's, Newfoundland.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

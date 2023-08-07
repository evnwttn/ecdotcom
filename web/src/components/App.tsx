import { Box } from "@mui/material";
import { Nav } from ".";
import { palette } from "../styles";
import cover from "../assets/img/Artwork.png";

export const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <Box
          sx={{
            fontFamily: "noto-serif, serif",
            textTransform: "uppercase",
            fontSize: "1.35vw",
            letterSpacing: "3.42vw",
            color: palette.gold,
            ml: "3.42vw",
            mb: "2.5vw",
          }}
        >
          Elder Caius
        </Box>
        <Box
          sx={{
            textTransform: "uppercase",
            fontSize: "1vw",
            letterSpacing: "0.95vw",
            color: palette.offwhite,
            ml: "3.5vw",
            mb: "2.5vw",
          }}
        >
          <Box>Alien Space Bats / From Below</Box>
          <Box sx={{ display: "flex", letterSpacing: "0.95" }}>
            Available Everywhere
            <Box sx={{ color: palette.grey, ml: "0.95vw" }}>00/00/00</Box>
          </Box>
        </Box>
        <Box sx={{ mb: "2.5vw" }}>
          <Nav />
        </Box>
        <Box
          sx={{
            height: "29.32vw",
            width: "29.32vw",
            backgroundSize: "100%",
            backgroundImage: `url(${cover})`,
            ml: "10vw",
            mb: "2.5vw",
          }}
        />
        <Box
          sx={{
            width: "41.30vw",
            height: "auto",
          }}
        >
          <Box
            sx={{
              fontFamily: "noto-serif, serif",
              textTransform: "uppercase",
              fontSize: "1vw",
              letterSpacing: "3.42vw",
              color: palette.offwhite,
              mt: "2.5vw",
              ml: "16.1vw",
              mb: "2.5vw",
            }}
          >
            About
          </Box>
          <Box
            sx={{
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
              color: palette.offwhite,
              width: "39vw",
              ml: "5.5vw",
              mb: "2.5vw",
            }}
          >
            <Box>
              ELDER CAIUS, based in St. John's, Newfoundland, is an audio/visual
              project created by Evan Watton.
            </Box>
            <Box>
              On March 1st, 2023, ELDER CAIUS released its debut single,
              Kailash, When It Rises, a sprawling nine-minute prog anomaly
              pairing the dreamy nuances of psychedelia with filmscore elements
              and noise. Created as part of the RPM Challenge, Kailash... was
              written and self produced entirely within the month of February.
            </Box>
            <Box>
              The follow up double feature, Alien Space Bats / From Below,
              plunges deep into the murky depths of psychedelia and surfaces a
              grimier, sunken form. It features the finishing touches of
              legendary Mastering Engineer, Dan Swanö.
            </Box>
            <Box>
              A hobbylist musician and graphic designer, Evan Watton has
              produced music for over 15 years. His past projects include
              international deathcore act, Ascariasis.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

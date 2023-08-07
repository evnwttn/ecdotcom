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
          }}
        ></Box>
      </Box>
    </Box>
  );
};

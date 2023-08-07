import { Box } from "@mui/material";
import cover from "../assets/img/Artwork.png";

export const Cover = () => {
  return (
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
  );
};

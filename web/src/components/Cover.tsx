import { Box } from "@mui/material";
import cover from "../assets/img/Artwork.png";

export const Cover = () => {
  return (
    <a
      href="https://raw.githubusercontent.com/evnwttn/ecdotcom/main/web/src/assets/img/Artwork.png"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        sx={{
          height: "29.32vw",
          width: "29.32vw",
          backgroundSize: "100%",
          backgroundImage: `url(${cover})`,
          ml: "10vw",
          mb: "2.5vw",
          "@media (max-width: 480px)": {
            mt: "3.5vw",
            ml: "6vw",
            mb: "5vw",
            height: "52vw",
            width: "52vw",
          },
        }}
      />
    </a>
  );
};

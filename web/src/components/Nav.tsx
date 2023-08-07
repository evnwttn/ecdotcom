import { Box, IconButton } from "@mui/material";

import bandcampIcon from "../assets/icons/bandcamp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import mailIcon from "../assets/icons/mail.svg";
import spotifyIcon from "../assets/icons/spotify.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

interface NavItem {
  name: string;
  icon: string;
}

const navConfig: NavItem[] = [
  { name: "Bandcamp", icon: bandcampIcon },
  { name: "YouTube", icon: youtubeIcon },
  { name: "Spotify", icon: spotifyIcon },
  { name: "Instagram", icon: instagramIcon },
  { name: "Mail", icon: mailIcon },
];

export const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row nowrap",
        width: "43.75vw",
        ml: "2.9vw",
        justifyContent: "space-between",
      }}
    >
      {navConfig.map((item: NavItem) => {
        return (
          <IconButton
            key={item.name}
            sx={{
              width: "3.5vw",
              height: "3.5vw",
              "&:hover": {
                cursor: "pointer",
                opacity: "0.8",
              },
            }}
          >
            <img src={item.icon} />
          </IconButton>
        );
      })}
    </Box>
  );
};

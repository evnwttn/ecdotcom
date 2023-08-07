import { Box, IconButton, Link } from "@mui/material";

import bandcampIcon from "../assets/icons/bandcamp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import mailIcon from "../assets/icons/mail.svg";
import spotifyIcon from "../assets/icons/spotify.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

interface NavItem {
  name: string;
  icon: string;
  url: string;
}

const navConfig: NavItem[] = [
  {
    name: "Bandcamp",
    icon: bandcampIcon,
    url: "https://eldercaius.bandcamp.com",
  },
  {
    name: "YouTube",
    icon: youtubeIcon,
    url: "https://www.youtube.com/@eldercaius",
  },
  {
    name: "Spotify",
    icon: spotifyIcon,
    url: "https://open.spotify.com/artist/4j5jljkerww5PQDJtNP84P",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com/eldercaius",
  },
  { name: "Mail", icon: mailIcon, url: "mailto:eldercaius@gmail.com" },
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
        mb: "2.5vw",
      }}
    >
      {navConfig.map((item: NavItem) => {
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <IconButton
              key={item.name}
              sx={{
                width: "3.5vw",
                height: "3.5vw",
                "&:hover": {
                  cursor: "pointer",
                  opacity: "0.7",
                },
              }}
            >
              <img src={item.icon} />
            </IconButton>
          </a>
        );
      })}
    </Box>
  );
};

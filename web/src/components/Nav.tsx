import { Box, IconButton } from "@mui/material";
import { navSx } from "../styles";
import "../styles/nav.css";

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
    <Box sx={navSx.container}>
      {navConfig.map((item: NavItem) => {
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <IconButton key={item.name} sx={navSx.iconButton}>
              <img className="svg-icon" src={item.icon} alt={item.name} />{" "}
            </IconButton>
          </a>
        );
      })}
    </Box>
  );
};

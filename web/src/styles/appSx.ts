import { palette } from ".";

export const appSx = {
  container: {
    width: "85.4vw",
    height: "auto",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    paddingTop: "8.22vw",
    column: {
      display: "flex",
      flexFlow: "column nowrap",
    },
  },
  title: {
    fontFamily: "noto-serif, serif",
    textTransform: "uppercase",
    fontSize: "1.35vw",
    letterSpacing: "3.42vw",
    color: palette.gold,
    ml: "3.42vw",
    mb: "2.5vw",
    subtitle: {
      textTransform: "uppercase",
      fontSize: "1vw",
      letterSpacing: "0.95vw",
      color: palette.offwhite,
      ml: "3.5vw",
      mb: "2.5vw",
      available: { display: "flex", letterSpacing: "0.95" },
      date: { color: palette.grey, ml: "0.95vw" },
    },
  },
  bio: {
    wrap: {
      width: "41.30vw",
      height: "auto",
    },
    title: {
      fontFamily: "noto-serif, serif",
      textTransform: "uppercase",
      fontSize: "1vw",
      letterSpacing: "3.42vw",
      color: palette.offwhite,
      mt: "2.5vw",
      ml: "16.1vw",
      mb: "3.5vw",
    },
    body: {
      fontSize: "0.9vw",
      letterSpacing: "0.1vw",
      color: palette.offwhite,
      width: "39vw",
      ml: "5.5vw",
      mb: "2.5vw",
    },
    div: { mb: "1.25vw" },
    bottomDiv: { paddingBottom: "4.11vw" },
  },
};

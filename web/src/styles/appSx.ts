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
    "@media (max-width: 480px)": {
      mt: "3.5vw",
      fontSize: "3.5vw",
      paddingLeft: "1vw",
    },
    subtitle: {
      textTransform: "uppercase",
      fontSize: "1vw",
      letterSpacing: "0.95vw",
      color: palette.offwhite,
      ml: "3.5vw",
      mb: "2.5vw",
      "@media (max-width: 480px)": {
        mt: "3.5vw",
        fontSize: "2vw",
      },
      available: { display: "flex", letterSpacing: "0.95" },
      date: { color: palette.grey, ml: "0.95vw" },
    },
  },
  press: {
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
      "@media (max-width: 480px)": {
        fontSize: "2vw",
        ml: "21.5vw",
        mb: "4.5vw",
      },
    },
    body: {
      fontSize: "0.9vw",
      letterSpacing: "0.1vw",
      color: palette.offwhite,
      width: "39vw",
      height: "20vw",
      ml: "5.5vw",
      mb: "2.5vw",
      "@media (max-width: 480px)": {
        fontSize: "1.8vw",
        width: "52vw",
      },
    },
    div: { mb: "1.25vw" },
  },
};

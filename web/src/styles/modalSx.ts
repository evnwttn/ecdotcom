import { palette } from ".";

export const modalSx = {
  container: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "33vw",
    boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
    p: "3.75vw",
    backgroundColor: palette.black,
    border: `solid 1px ${palette.grey}`,
    "@media (max-width: 480px)": {
      width: "75vw",
      height: "25vw",
    },
  },
  title: {
    fontFamily: "noto-serif, serif",
    textTransform: "uppercase",
    fontSize: "1vw",
    letterSpacing: "1vw",
    color: palette.gold,
    "@media (max-width: 480px)": {
      fontSize: "2.25vw",
      mb: "2vw",
    },
  },
  message: {
    color: palette.offwhite,
    mt: "1vw",
    mb: "1.5vw",
    fontSize: "0.9vw",
    letterSpacing: "0.15vw",
    "@media (max-width: 480px)": {
      fontSize: "1.75vw",
      mb: "3.5vw",
    },
  },
  icon: {
    color: palette.white,
    ml: "0.75vw",
    "&:hover": {
      cursor: "pointer",
      color: palette.gold,
    },
  },
  textField: {
    paddingY: "0.75vw",
    paddingX: "1.25vw",
    backgroundColor: palette.white,
  },
};

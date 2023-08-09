export const navSx = {
  container: {
    display: "flex",
    flexDirection: "row nowrap",
    width: "43.75vw",
    ml: "2.9vw",
    justifyContent: "space-between",
    mb: "2.5vw",
    "@media (max-width: 480px)": {
      mt: "1vw",
      width: "58vw",
    },
  },
  iconButton: {
    width: "3.5vw",
    height: "3.5vw",
    "@media (max-width: 480px)": {
      height: "10vw",
      width: "10vw",
    },
    "@media (min-width: 481px) and (max-width: 767px)": {
      height: "5vw",
      width: "5vw",
    },
    "&:hover": {
      cursor: "pointer",
      opacity: "0.7",
    },
  },
};

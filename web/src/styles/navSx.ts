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
    "&:hover": {
      cursor: "pointer",
      opacity: "0.7",
    },
  },
};

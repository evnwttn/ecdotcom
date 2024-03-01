import { Box } from "@mui/material";
import { appSx } from "../styles";

interface PressItem {
  header: string;
  link: string;
  img: string;
}

const pressArray: PressItem[] = [
  { header: "", link: "", img: "" },
  {
    header:
      "HeavyNFLD | Elder Caius Releases Debut Single “Kailash, When It Rises",
    link: "https://heavynfld.wordpress.com/2023/03/22/elder-caius-releases-debut-single-kailash-when-it-rises/",
    img: "",
  },
];

export const Press = () => {
  return (
    <Box sx={appSx.press.wrap}>
      <Box sx={appSx.press.title}>Press</Box>
      <Box sx={appSx.press.body}>
        {pressArray.map((item: PressItem) => {
          return <Box sx={appSx.press.div} onClick={() => console.log(item)} />;
        })}
      </Box>
    </Box>
  );
};

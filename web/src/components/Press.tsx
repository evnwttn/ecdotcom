import { Box } from "@mui/material";
import { appSx } from "../styles";

interface PressItem {
  header: string;
  link: string;
  img: string;
}

const pressArray: PressItem[] = [{ header: "", link: "", img: "" }];

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

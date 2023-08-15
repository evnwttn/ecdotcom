import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { Body, EmailForm } from ".";
import { appSx } from "../styles";

export const App = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={appSx.container}>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ backdropFilter: "blur(1.5px)" }}
      >
        <Box>
          <EmailForm handleClose={handleClose} />
        </Box>
      </Modal>
      <Body />
    </Box>
  );
};

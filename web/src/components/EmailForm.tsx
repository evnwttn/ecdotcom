import { useState, useRef } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const modalSx = {
  container: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "33%",
    boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
    p: "2.75vw",
    backgroundColor: "black",
    border: "solid 1px white",
  },
  title: {
    fontFamily: "noto-serif, serif",
    textTransform: "uppercase",
    fontSize: "1vw",
    letterSpacing: "1vw",
    color: "yellow",
  },
  message: {
    color: "white",
    my: "0.5vw",
    fontSize: "1vw",
    letterSpacing: "0.1vw",
  },
  icon: {
    color: "white",
  },
};

const validateEmail = (email: string): boolean => {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(
    email
  );

  return emailFormat;
};

export const EmailForm = ({ handleClose }: { handleClose: () => void }) => {
  const [submitting, toggleSubmitting] = useState<boolean>(false);
  const [formMessage, setFormMessage] = useState<string>(
    "I will only contact you with new music."
  );
  const [emailFieldError, setEmailFieldError] = useState<boolean>(false);
  const emailField = useRef<HTMLInputElement>();

  const onSubmit = (email: string) => {
    toggleSubmitting(true);

    if (!validateEmail(email)) {
      setFormMessage("Please enter a valid email address.");

      setEmailFieldError(true);
      toggleSubmitting(false);

      return;
    }

    console.log(email);
    handleClose();
  };

  return (
    <Box sx={modalSx.container}>
      <Box sx={modalSx.title}>Join The Mailing List</Box>
      <Box sx={modalSx.message}>{formMessage}</Box>
      <Box>
        <TextField
          disabled={submitting}
          error={emailFieldError}
          label={"Email Address"}
          id="email-field"
          inputRef={emailField}
          variant="outlined"
        />
        <IconButton
          sx={modalSx.icon}
          disabled={submitting}
          id="submit-email"
          onClick={() => onSubmit(emailField.current!.value)}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

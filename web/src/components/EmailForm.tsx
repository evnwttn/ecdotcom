import { useState, useRef } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { validateEmail, postEmail, PostEmailProps } from "./functions";
import { modalSx } from "../styles";

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

    postEmail({
      email,
      setFormMessage,
      setEmailFieldError,
      toggleSubmitting,
      handleClose,
    } as PostEmailProps);
  };

  return (
    <Box sx={modalSx.container}>
      <Box sx={modalSx.title}>Join The Mailing List</Box>
      <Box sx={modalSx.message}>{formMessage}</Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          variant="standard"
          disabled={submitting}
          error={emailFieldError}
          placeholder={"Email Address"}
          id="email-field"
          inputRef={emailField}
          InputProps={{
            disableUnderline: true,
          }}
          sx={modalSx.textField}
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

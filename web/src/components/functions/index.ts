import { Dispatch, SetStateAction } from "react";

export interface PostEmailProps {
  email: string;
  setFormMessage: Dispatch<SetStateAction<string>>;
  setEmailFieldError: Dispatch<SetStateAction<boolean>>;
  toggleSubmitting: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
}

export const routes = {
  postEmail:
    "https://2o2kiktfna.execute-api.us-east-1.amazonaws.com/dev/serverlessSetup/postEmail",
};

export { postEmail } from "./postEmail";
export { validateEmail } from "./validateEmail";

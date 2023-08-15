import axios from "axios";
import { routes, PostEmailProps } from "./";

export const postEmail = async ({
  email,
  setFormMessage,
  setEmailFieldError,
  toggleSubmitting,
  handleClose,
}: PostEmailProps) => {
  let isMounted = true;

  setFormMessage("Submitting... ");

  const handleResponse = (success: boolean) => {
    if (success) {
      setFormMessage("Success!");
      handleClose();

      return;
    }

    setFormMessage("Internal error, please try again.");
    setEmailFieldError(true);
    toggleSubmitting(false);
  };

  axios
    .post(routes.postEmail, email)
    .then(
      (res: any) => isMounted && handleResponse(res.data.success as boolean)
    )
    .catch(function (error: any) {
      console.log(error);
    });

  return () => {
    isMounted = false;
  };
};

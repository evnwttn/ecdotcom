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
      setFormMessage("Success");
      handleClose();
    } else {
      setFormMessage("Internal error: please try again.");
      setEmailFieldError(true);
      toggleSubmitting(false);
    }

    return;
  };

  axios
    .post(routes.postEmail, email)
    .then(
      (res: any) => isMounted && handleResponse(res.data.success as boolean)
    )
    .catch(function (error: any) {
      console.log(error);

      handleResponse(false);
    });

  return () => {
    isMounted = false;
  };
};

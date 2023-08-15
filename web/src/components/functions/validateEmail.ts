export const validateEmail = (email: string): boolean => {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(
    email
  );

  return emailFormat;
};

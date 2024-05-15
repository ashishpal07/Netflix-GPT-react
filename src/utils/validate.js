export const checkValidData = (email, password) => {
  const vlaidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      password
    );

  if (!vlaidEmail) return "Email is not valid";
  if (!validPassword)
    return "Password must contains atleast one uppercase, lowercase, symbol, digit and length is between 8 to 15";

  return null;
};

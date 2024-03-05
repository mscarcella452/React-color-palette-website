import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const startAdornmentIcon = {
  Username: <AccountCircleIcon />,
  Email: <MailOutlineIcon />,
  Password: <LockOutlinedIcon />,
};

// Utility function for minimum length validation
const requiredValidator =
  name =>
  ({ value }) =>
    value.trim().length >= 1 ? false : "* Required";

// Utility function for minimum/maximum length validation
const minMaxValidator =
  (minLength, maxLength, name) =>
  ({ value }) =>
    value.trim().length >= minLength && value.trim().length <= maxLength
      ? false
      : `${name} must be between ${minLength} and ${maxLength} characters long.`;

// Utility function for format validation using a regex
const regexValidator =
  (regex, errorMessage) =>
  ({ value }) =>
    regex.test(value) ? false : errorMessage;

// Utility function for checking for whitespace
const whitespaceValidator =
  name =>
  ({ value }) =>
    !/\s/.test(value)
      ? false
      : `${name} may not contain any whitespace characters.`;

// Utility function for checking availability
const availabilityValidator =
  name =>
  ({ value, users }) => {
    const notAvailable = users.some(
      user => user[name].toUpperCase() === value.toUpperCase()
    );
    return notAvailable
      ? `This ${name} is already taken. Please choose another.`
      : false;
  };

export const validationRules = {
  signUp: {
    username: [
      // whiteSpace error
      whitespaceValidator("username"),
      // required
      requiredValidator(),
      // special characters not allowed
      regexValidator(
        /^[a-zA-Z0-9]+$/,
        "Username can only contain letters and numbers."
      ),
      // minmax between 3 and 8 characters
      minMaxValidator(4, 10, "username"),
      // avalilablity error
      availabilityValidator("username"),
    ],
    email: [
      // required
      requiredValidator(0),
      // valid email adress
      regexValidator(
        /^[^\s@]+(\.[^\s@]+)*@\w+(\.\w+(?!\.))*$/,
        "Enter a valid email address."
      ),
      // avalilablity error
      availabilityValidator("email"),
    ],
    password: [
      // required
      requiredValidator(0),
      // minmax between 3 and 8 characters
      minMaxValidator(8, 12, "password"),
    ],
  },
  logIn: {
    email: [
      // required
      requiredValidator(0),
      // valid email adress
      regexValidator(
        /^[^\s@]+(\.[^\s@]+)*@\w+(\.\w+(?!\.))*$/,
        "Enter a valid email address."
      ),
    ],
    password: [
      // required
      requiredValidator(0),
    ],
  },
};

// export const validateInput = (formVariant, name, params) => {
//   const validations = validationRules[formVariant][name];
//   const errors = validations.map(rule => rule(params));
//   const currentError = errors.filter(error => error !== false)[0];
//   return currentError === undefined ? false : currentError;
// };
export const validateInput = (formVariant, name, params) => {
  const validationErrors = validationRules[formVariant][name].map(rule =>
    rule(params)
  );
  const currentError = validationErrors.filter(error => error !== false)[0];
  return currentError === undefined ? false : currentError;
};

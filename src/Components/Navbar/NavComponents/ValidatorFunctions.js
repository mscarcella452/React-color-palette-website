const validEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
// const whitespaceValidator = value => /\s/.test(value);

const minMaxValidator = (value, min, max) =>
  value.length < 3 || value.length > 20;

export const validateUsername = username => {
  if (!username) {
    return "Username is required";
  } else {
    // No whitespace
    if (/\s/.test(username)) {
      return "Username may not contain whitespace.";
    }
    // Length requirement
    if (minMaxValidator(username, 3, 10)) {
      return "Username must be between 3 and 10 characters.";
    }

    // Character set
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return "Username may only contain alphanumeric characters, underscores, or hyphens.";
    }
    // Uniqueness (optional) AVAILABILITY TESTER
    // Check if the username is already registered in your database

    // If no errors found
    return "";
  }
};

export const validateEmail = (email, availabilityValidator) => {
  if (!email) {
    return "Email is required";
  } else {
    // Email format
    if (!validEmail(email)) {
      return "Invalid email format.";
    }

    // availabilityValidator();

    // if(formVariant === "signUp"){
    //   // Uniqueness (optional) AVAILABILITY TESTER
    //   // Check if the email is already registered in your database

    // }else {
    //   // Uniqueness (optional) AVAILABILITY TESTER
    //   // Check if the email is match in your database
    // }
    // If no errors found

    return "";
  }
};

export const validatePassword = (password, formVariant) => {
  if (!password) {
    return "Password is required.";
  } else if (formVariant === "Sign Up") {
    // Length requirement
    if (minMaxValidator(password, 8, 12)) {
      return "Password must be between 8 and 12 characters.";
    }

    // Complexity requirements (you can customize these based on your needs)
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!(hasUpperCase && hasLowerCase && hasNumber)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }
  }

  // If no errors found

  return "";
};

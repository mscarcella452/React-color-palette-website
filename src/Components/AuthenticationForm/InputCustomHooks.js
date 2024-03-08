import { useState, useRef, useContext } from "react";
import { UIContext } from "../../Context/AppContext";

export const useUsernameInput = () => {
  const [error, setError] = useState("");
  const usernameRef = useRef();
  const { users } = useContext(UIContext);

  const isUsernameValid = () => {
    const username = usernameRef.current.value.trim();

    const isNotAvailable = users.some(
      user => user.username.toUpperCase() === username.toUpperCase()
    );

    if (!username) {
      setError("Username is required");
      return false;
    }
    if (isNotAvailable) {
      setError("Username already taken. Please choose another.");
      return false;
    }
    if (/\s/.test(username)) {
      // No whitespace
      setError("Username may not contain whitespace.");
      return false;
    }
    // Length requirement
    if (username.length < 3 || username.length > 10) {
      setError("Username must be between 3 and 10 characters.");
      return false;
    }
    // Character set
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      setError(
        "Username may only contain alphanumeric characters, underscores, or hyphens."
      );
      return false;
    }

    // Uniqueness (optional) AVAILABILITY TESTER
    // Check if the username is already registered in your database

    // If no errors found
    setError(false);
    return true;
  };

  return [isUsernameValid, usernameRef, error];
};

export const useEmailInput = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const { users } = useContext(UIContext);

  const isEmailValid = formVariant => {
    const email = emailRef.current.value.trim();

    if (!email) {
      setError("Email is required");
      return false;
    }

    // Email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return false;
    }

    const emailMatch = users.some(
      user => user.email.toUpperCase() === email.toUpperCase()
    );

    if (formVariant === "Sign Up") {
      if (emailMatch) {
        setError("Email already taken. Please choose another.");
        return false;
      }
    }
    if (formVariant === "Log In") {
      if (!emailMatch) {
        setError(
          "Email not found. Please double-check your email or sign up for a new account."
        );
        return false;
      }
    }

    // Check if the email is already registered in your database

    // If no errors found
    setError(false);
    return true;
  };

  return [isEmailValid, emailRef, error];
};

export const usePasswordInput = () => {
  const [error, setError] = useState("");
  const passwordRef = useRef(null);

  const isPasswordValid = formVariant => {
    const password = passwordRef.current.value.trim();

    if (!password) {
      setError("Password is required");
      return false;
    }
    if (formVariant === "Sign Up") {
      // No whitespace
      if (/\s/.test(password)) {
        setError("Password may not contain whitespace.");
        return false;
      }
      // Length requirement
      if (password.length < 8 || password.length > 15) {
        setError("Password must be between 8 and 15 characters.");
        return false;
      }

      // Complexity requirements (you can customize these based on your needs)
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);

      if (!(hasUpperCase && hasLowerCase && hasNumber)) {
        setError(
          "Password must contain at least one uppercase letter, one lowercase letter, and one number."
        );
        return false;
      }
    }
    setError(false);
    return true;
  };

  return [isPasswordValid, passwordRef, error, setError];
};

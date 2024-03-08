import { useState, useRef, useContext } from "react";
import { UIContext } from "../../../../Context/AppContext";

const useEmailInput = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const { users } = useContext(UIContext);

  const isEmailValid = formVariant => {
    const email = emailRef.current.value.trim();

    if (!email) {
      setError("Email is required");
      return false;
    }

    // check if email is valid format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return false;
    }

    const emailMatch = users.some(
      user => user.email.toUpperCase() === email.toUpperCase()
    );

    if (formVariant === "Sign Up") {
      // Check if the email is already registered in your database
      if (emailMatch) {
        setError("Email already taken. Please choose another.");
        return false;
      }
    }
    if (formVariant === "Log In") {
      // Check if the email is matchers a user in your database
      if (!emailMatch) {
        setError(
          "Email not found. Please double-check your email or sign up for a new account."
        );
        return false;
      }
    }

    // If no errors found
    setError(false);
    return true;
  };

  return [isEmailValid, emailRef, error];
};

export default useEmailInput;

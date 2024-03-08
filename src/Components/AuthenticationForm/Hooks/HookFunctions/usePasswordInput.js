import { useState, useRef } from "react";

const usePasswordInput = () => {
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
    // If no errors found
    setError(false);
    return true;
  };

  return [isPasswordValid, passwordRef, error, setError];
};

export default usePasswordInput;

import { useState, useRef, useContext } from "react";
import { UIContext } from "../../../../Context/AppContext";

const useUsernameInput = () => {
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

    // check if username is available
    if (isNotAvailable) {
      setError("Username already taken. Please choose another.");
      return false;
    }
    // No whitespace
    if (/\s/.test(username)) {
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

    // If no errors found
    setError(false);
    return true;
  };

  return [isUsernameValid, usernameRef, error];
};

export default useUsernameInput;

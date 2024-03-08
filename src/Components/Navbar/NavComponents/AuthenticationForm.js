import { useState, useRef, createRef, useContext, useEffect } from "react";

import { useToggle } from "../../../Hooks/CustomHooks";

import { Typography, Button, Box, IconButton, TextField } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import FormInput from "./FormInput";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "./ValidatorFunctions";
import { mobileLandscape } from "../../../Theme/mediaQueries";

const useFetchCurrentUser = () => {
  const app = useContext(UIContext);
  return app.users.find(user => user.username === app.currentUser.username);
};

const useUsernameValidator = () => {
  const [error, setError] = useState("");
  const usernameRef = useRef(null);

  const validateUsername = () => {
    const username = usernameRef.current.value.trim();

    if (!username) {
      setError("Username is required");
    } else {
      // No whitespace
      if (/\s/.test(username)) {
        setError("Username may not contain whitespace.");
      }
      // Length requirement
      if (username.length < 3 || username.length > 10) {
        setError("Username must be between 3 and 10 characters.");
      }
      // Character set
      if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
        setError(
          "Username may only contain alphanumeric characters, underscores, or hyphens."
        );
      }
      // If no errors found
      setError(false);
    }
  };

  return { error, validateUsername, usernameRef };
};

function AuthenticationForm({ initialVariant, handleClose }) {
  const [rememberMe, toggleRememberMe] = useToggle(true);
  const [variant, setVariant] = useState(initialVariant);
  const { storedLogIn } = useContext(UIContext);
  const UIDispatch = useContext(UIDispatchContext);

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!make two forms with customhooks for each input. then you dont have to worry about all this garbage. can also useContext in customform to check for availaiblity
  // const { usernameError, validateUsername, usernameRef } = useUsernameValidator();
  // make it a form -->
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   validateUsername();
  //   validateEmail();
  //   validatePassword();

  // };

  const [errors, setErrors] = useState({});
  // const inputRefs = useRef([]);
  const inputRefs = useRef(formData[variant].inputs.map(() => createRef()));

  useEffect(() => {
    // Update inputRefs and errors when variant changes

    inputRefs.current.forEach(ref => {
      if (ref.current) {
        if (variant === "Log In" && ref.current.name !== "username") {
          // set stored log in credentials from remember me
          ref.current.value = storedLogIn[ref.current.name];
        } else ref.current.value = "";
      }
    });

    inputRefs.current = formData[variant].inputs.map(() => createRef());

    setErrors(
      formData[variant].inputs.reduce((acc, input) => {
        acc[input] = false;
        return acc;
      }, {})
    );
  }, [variant]);

  const toggleVariants = () => {
    // to switch between sign up and log in form
    setVariant(prevVariant =>
      prevVariant === "Sign Up" ? "Log In" : "Sign Up"
    );
  };

  const handleSubmit = () => {
    const isAnyErrorNotEmpty = validationErrors => {
      return Object.values(validationErrors).some(value => value !== false);
    };
    const validationErrors = {}; // Local object to store validation errors

    // Populate validationErrors object with validation errors
    inputRefs.current.forEach(ref => {
      if (ref.current) {
        const { name, value } = ref.current;
        const validationError = formData[variant].validationFunctions[name](
          value,
          variant
        );
        validationErrors[name] = validationError;
      }
    });

    // Update state with validation errors if any
    if (isAnyErrorNotEmpty(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    const userInfo = {};
    inputRefs.current.forEach(ref => {
      if (ref.current) {
        // SUBMIT FORM VALUES TO LOCAL STORAGE
        userInfo[ref.current.name] = ref.current.value;
      }
    });

    UIDispatch({
      type: formData[variant].dispatchType,
      userInfo: userInfo,
      rememberMe: rememberMe,
    });

    handleClose();
  };

  return (
    <>
      <Typography variant='subHeading1'>{variant}</Typography>

      {formData[variant].inputs.map((input, index) => (
        <FormInput
          // key={inputRefs.current[index]}
          inputName={input}
          forwardedRef={inputRefs.current[index]}
          error={errors[input]}
        />
      ))}

      {variant === "Log In" && (
        <Button onClick={toggleVariants} variant='label'>
          Forgot Password?
        </Button>
      )}
      <Box
        className='flexRow'
        sx={{ width: 1, gap: 1, justifyContent: "flex-Start" }}
      >
        <IconButton onClick={toggleRememberMe} sx={{ color: "info.main" }}>
          {rememberMe ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>

        <Typography variant='p'>Remember Me</Typography>
      </Box>
      <Button variant='primary' sx={{ width: 1 }} onClick={handleSubmit}>
        {variant}
      </Button>
      {/* TOGGLE VARIANT */}
      <Box className='flexRow' sx={{ width: 1, flexWrap: "wrap" }}>
        <Typography variant='label'>
          {formData[variant].switchTo.prompt}
        </Typography>
        <Button onClick={toggleVariants} variant='label'>
          {formData[variant].switchTo.btn}
        </Button>
      </Box>
    </>
  );
}

export default AuthenticationForm;

const formData = {
  "Sign Up": {
    buttonVariant: "primary",
    inputs: ["username", "email", "password"],
    switchTo: { prompt: "Already have an account?", btn: "Log In" },
    dispatchType: "sign_up",
    validationFunctions: {
      username: validateUsername,
      email: validateEmail,
      password: validatePassword,
    },
  },
  "Log In": {
    buttonVariant: "secondary",
    inputs: ["email", "password"],
    switchTo: { prompt: "Don't have an account?", btn: "Sign Up" },
    dispatchType: "log_in",
    validationFunctions: {
      email: validateEmail,
      password: validatePassword,
    },
  },
};
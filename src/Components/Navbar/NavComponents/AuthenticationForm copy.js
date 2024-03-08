import {
  useState,
  useRef,
  createRef,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { useToggle } from "../../../Hooks/CustomHooks";

import { Typography, Button, Box, IconButton, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import { FormContext, FormDispatchContext } from "../../../Context/FormContext";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import DialogWrapper from "../AthenticationDialog/DialogWrapper";
import FormInput from "./FormInput";

import UserPalettesPage from "../../UserPalettesPage/UserPalettesPage";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "./ValidatorFunctions";
import { mobileLandscape } from "../../../Theme/mediaQueries";

const savedUser = { email: "dallenSperms@gmail.com", password: "ReactMan12" };

const useFetchCurrentUser = () => {
  const app = useContext(UIContext);
  return app.users.find(user => user.username === app.currentUser.username);
};

function AuthenticationForm({ variant, handleClose }) {
  const [rememberMe, toggleRememberMe] = useToggle(true);
  const app = useContext(UIContext);
  const UIDispatch = useContext(UIDispatchContext);

  const inputErrors = formData[variant].inputs.reduce((errors, input) => {
    errors[input] = "";
    return errors;
  }, {});

  const [errors, setErrors] = useState(inputErrors);

  const inputRefs = useRef(formData[variant].inputs.map(() => createRef()));
  // const inputRefs = useRef(
  //   formData[variant].inputs.reduce((acc, _) => {
  //     acc.push(createRef());
  //     return acc;
  //   }, [])
  // );

  useEffect(() => {
    if (variant === "Log In") {
      // set stored log in credentials from remember me
      const { storedLogIn } = app;
      inputRefs.current.forEach(ref => {
        if (ref.current && ref.current.name !== "username") {
          ref.current.value = storedLogIn[ref.current.name];
        }
      });
    }
  }, []);

  const handleSubmit = () => {
    const isAnyErrorNotEmpty = validationErrors => {
      return Object.values(validationErrors).some(value => value !== "");
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

    // if (variant === "Sign Up") {
    //   const newUser = {};
    //   inputRefs.current.forEach(ref => {
    //     if (ref.current) {
    //       // SUBMIT FORM VALUES TO LOCAL STORAGE
    //       newUser[ref.current.name] = ref.current.value;
    //     }
    //   });

    //   UIDispatch({ type: "sign_up", newUser: newUser, rememberMe: rememberMe });
    // }

    // if (variant === "Log In") {
    //   inputRefs.current.forEach(ref => {
    //     if (ref.current && ref.current.name === "email") {
    //       // SUBMIT FORM VALUES TO LOCAL STORAGE
    //       UIDispatch({
    //         type: "log_in",
    //         email: ref.current.value,
    //       });
    //     }
    //   });
    // }

    handleClose();
  };

  return (
    <>
      <Typography variant='subHeading1'>{variant}</Typography>
      {formData[variant].inputs.map((input, index) => (
        <FormInput
          key={inputRefs.current[index]}
          inputName={input}
          forwardedRef={inputRefs.current[index]}
          error={errors[input]}
        />
      ))}

      {variant === "Log In" && (
        <Typography
          variant='p'
          sx={{ width: 1, textAlign: "right", fontSize: "1rem" }}
        >
          Forgot Password?
        </Typography>
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
    </>
  );
}

export default AuthenticationForm;

const formData = {
  "Sign Up": {
    buttonVariant: "primary",
    inputs: ["username", "email", "password"],
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
    dispatchType: "log_in",
    validationFunctions: {
      email: validateEmail,
      password: validatePassword,
    },
  },
};

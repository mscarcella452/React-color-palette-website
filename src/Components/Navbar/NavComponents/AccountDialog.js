import {
  useState,
  useRef,
  createRef,
  useContext,
  useEffect,
  useCallback,
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

const savedUser = { email: "dallenSperms@gmail.com", password: "ReactMan12" };

const useFetchCurrentUser = () => {
  const app = useContext(UIContext);
  return app.users.find(user => user.username === app.currentUser.username);
};

function AccountDialog({ variant, buttonHeight = "40px", navBarSm }) {
  const [formOpen, setFormOpen] = useState(false);
  const [rememberMe, toggleRememberMe] = useToggle(true);
  const app = useContext(UIContext);
  const UIDispatch = useContext(UIDispatchContext);

  const inputErrors = formData[variant].inputs.reduce((errors, input) => {
    errors[input] = "";
    return errors;
  }, {});

  const [errors, setErrors] = useState(inputErrors);

  const inputRefs = useRef(formData[variant].inputs.map(() => createRef()));

  // useEffect(() => {
  //   if (formOpen && app.rememberMe && variant === "Log In") {
  //     const savedUser = app.users.find(
  //       user => user.username === app.currentUser.username
  //     );

  //     if (savedUser) {
  //       inputRefs.current.forEach(ref => {
  //         if (ref.current && ref.current.name === "email") {
  //           ref.current.value = savedUser.email;
  //         }
  //         if (ref.current && ref.current.name === "password") {
  //           ref.current.value = savedUser.password;
  //         }
  //       });
  //     }
  //   }
  // }, [formOpen, app.rememberMe]);

  useEffect(() => {
    if (formOpen && variant === "Log In") {
      // set stored log in credentials from remember me
      const { storedLogIn } = app;
      inputRefs.current.forEach(ref => {
        if (ref.current && ref.current.name !== "username") {
          ref.current.value = storedLogIn[ref.current.name];
        }
      });
    }
  }, [formOpen]);

  const handleOpen = () => setFormOpen(true);
  const handleClose = () => {
    // Clear input values
    inputRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
    setErrors(inputErrors);
    setFormOpen(false);
  };

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

    if (variant === "Sign Up") {
      const newUser = {};
      inputRefs.current.forEach(ref => {
        if (ref.current) {
          // SUBMIT FORM VALUES TO LOCAL STORAGE
          newUser[ref.current.name] = ref.current.value;
        }
      });

      UIDispatch({ type: "sign_up", newUser: newUser, rememberMe: rememberMe });
    }

    if (variant === "Log In") {
      inputRefs.current.forEach(ref => {
        if (ref.current && ref.current.name === "email") {
          // SUBMIT FORM VALUES TO LOCAL STORAGE
          UIDispatch({
            type: "log_in",
            email: ref.current.value,
          });
        }
      });
    }

    // Submit values and Close modal
    // inputRefs.current.forEach(ref => {
    //   if (ref.current) {
    //     // SUBMIT FORM VALUES TO LOCAL STORAGE
    //     console.log(ref.current.value);
    //   }
    // });
    handleClose();
  };

  return (
    <>
      {navBarSm ? (
        <IconButton onClick={handleOpen}>
          <AccountCircleIcon />
        </IconButton>
      ) : (
        <Button
          // variant={buttonVariant}
          variant={formData[variant].buttonVariant}
          onClick={handleOpen}
          size='small'
          sx={{ height: buttonHeight, maxHeight: 1 }}
        >
          {variant}
        </Button>
      )}

      <DialogWrapper handleClose={handleClose} open={formOpen}>
        <Typography variant='subHeading1'>{variant}</Typography>
        {formData[variant].inputs.map((input, index) => (
          <FormInput
            inputName={input}
            forwardedRef={inputRefs.current[index]}
            error={errors[input]}
          />
        ))}

        <Typography
          variant='p'
          sx={{ width: 1, textAlign: "right", fontSize: "1rem" }}
        >
          Forgot Password?
        </Typography>
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
      </DialogWrapper>
    </>
  );
}

export default AccountDialog;

const formData = {
  "Sign Up": {
    buttonVariant: "primary",
    inputs: ["username", "email", "password"],
    validationFunctions: {
      username: validateUsername,
      email: validateEmail,
      password: validatePassword,
    },
  },
  "Log In": {
    buttonVariant: "secondary",
    inputs: ["email", "password"],
    // validations only for signUp need update for login
    validationFunctions: {
      email: validateEmail,
      password: validatePassword,
    },
  },
};

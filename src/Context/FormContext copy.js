import { useReducer, createContext } from "react";

export const FormContext = createContext();
export const FormDispatchContext = createContext();

const initialValues = {
  // inputs: { username: "", email: "", password: "" },
  formOpen: false,
  rememberMe: false,
  rememberedUser: { Email: "", Password: "" },
  disableSubmit: { Username: true, Email: true, Password: true },
};

const appReducer = (form, action) => {
  switch (action.type) {
    case "update_disable_submit":
      // const { inputName, errorState } = action;

      return {
        ...form,
        disableSubmit: { ...form.disableSubmit, ...action.update },
      };

    case "reset_disable_submit":
      return {
        ...form,
        disableSubmit: {
          Username: action.Username,
          Email: true,
          Password: true,
        },
      };

    case "toggle_form_open":
      return { ...form, formOpen: !form.formOpen };

    case "toggle_remember_me":
      return { ...form, rememberMe: action.rememberMeToggle };

    case "set_remember_user":
      return {
        ...form,
        rememberedUser: { Email: action.Email, Password: action.Password },
      };

    case "reset_remember_user":
      return { ...form, rememberedUser: { Email: "", Password: "" } };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export function FormContextProvider({ children }) {
  const [FormData, FormDispatch] = useReducer(appReducer, initialValues);

  return (
    <FormContext.Provider value={FormData}>
      <FormDispatchContext.Provider value={FormDispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}

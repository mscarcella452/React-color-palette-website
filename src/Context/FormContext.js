import { useReducer, createContext } from "react";

export const FormContext = createContext();
export const FormDispatchContext = createContext();

const initialValues = {
  rememberMe: false,
  rememberedUser: { Email: "", Password: "" },
};

const appReducer = (form, action) => {
  switch (action.type) {
    case "toggle_remember_me":
      return { ...form, rememberMe: !form.rememberMe };

    // case "set_remember_user":
    //   return {
    //     ...form,
    //     rememberedUser: { Email: action.Email, Password: action.Password },
    //   };

    // case "reset_remember_user":
    //   return { ...form, rememberedUser: { Email: "", Password: "" } };

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

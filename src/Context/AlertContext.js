import React, { useReducer, createContext } from "react";

export const AlertContext = createContext();
export const AlertDispatchContext = createContext();

const initialValues = { severity: "warning", message: false };

const alertReducer = (alert, action) => {
  switch (action.type) {
    case "reset_alert":
      return initialValues;

    case "set_alert":
      return {
        severity: action.payload.severity,
        message: action.payload.message,
      };

    case "color_limit":
      return {
        severity: "warning",
        message: "Max 20 colors. Limit reached.",
      };

    case "color_name_error":
      return { severity: "warning", message: "Name your color." };

    case "palette_name_error":
      return { severity: "warning", message: "Name your palette." };

    case "color_error":
      return { severity: "warning", message: "Select color." };

    case "character_limit":
      return {
        severity: "warning",
        message: "Max 20 characters. Limit reached.",
      };

    case "color_added":
      return { severity: "success", message: `${action.colorName} added.` };

    case "color_updated":
      return { severity: "success", message: `${action.colorName} updated.` };

    case "duplicate_color":
      return {
        severity: "warning",
        message: "Duplicate. Choose a different color.",
      };

    case "duplicate_name":
      return {
        severity: "warning",
        message: "Duplicate. Choose a different name.",
      };

    case "delete_color":
      return { severity: "error", message: `${action.colorName} deleted.` };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export function AlertContextProvider({ children }) {
  const [alert, alertDispatch] = useReducer(alertReducer, initialValues);

  return (
    <AlertContext.Provider value={alert}>
      <AlertDispatchContext.Provider value={alertDispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
}

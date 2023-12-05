import React, { useReducer, createContext } from "react";

export const AppContext = createContext();
export const AppDispatchContext = createContext();

const initialValues = {
  key: "initial object",
};

const appReducer = (app, action) => {
  switch (action.type) {
    // case "name_your_function":
    //   return {
    //     ...app,
    //     something with a payload
    //   };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export function AppContextProvider({ children }) {
  const [app, appDispatch] = useReducer(appReducer, initialValues);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={appDispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

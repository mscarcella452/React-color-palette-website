import React, { useReducer, createContext, useCallback } from "react";
import { colorPalettes } from "../Components/PalettePages/SeedColors";

export const UIContext = createContext();
export const UIDispatchContext = createContext();

export const defaultUsers = [
  {
    username: "dallen12",
    email: "dallenSperms@gmail.com",
    password: "tourDeFrance12",
    palettes: colorPalettes,
  },
];

const initialValues = {
  users: defaultUsers,
  currentUser: { loggedIn: false, username: "", palettes: [] },
  rememberMe: {
    on: true,
    email: defaultUsers[0].email,
    password: defaultUsers[0].password,
  },
};

const filterUser = (email, users) =>
  users.filter(user => user.email.toUpperCase() === email.toUpperCase());

const appReducer = (app, action) => {
  switch (action.type) {
    case "log_in":
      const user = filterUser(action.email, app.users)[0];

      return {
        ...app,
        currentUser: {
          loggedIn: true,
          username: user.username,
          palettes: user.palettes,
        },
        // rememberMe: action.payload.rememberMe
        //   ? { username: user.username, palettes: user.palettes }
        //   : null,
      };

    case "sign_up":
      console.log("hey");
      return {
        ...app,
        users: [...app.users, action.newUser],
        currentUser: {
          loggedIn: true,
          username: action.newUser.username,
          palettes: [],
        },
      };

    case "toggle_remember_me":
      // REMEMBER ME COULD BE A SEPERATE CONTEXT. ONLY NEED FOR THE DIALOGS. NO REASON TO RE-RENDER ENTIRE SITE
      return {
        ...app,
        rememberMe: { ...app.rememberMe, on: !app.rememberMe.on },
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export function AppContextProvider({ children }) {
  const [user, UIDispatch] = useReducer(appReducer, initialValues);

  return (
    <UIContext.Provider value={user}>
      <UIDispatchContext.Provider value={UIDispatch}>
        {children}
      </UIDispatchContext.Provider>
    </UIContext.Provider>
  );
}

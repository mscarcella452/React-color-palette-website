import React, { useReducer, createContext, useCallback } from "react";

import { userPalettes } from "../Palettes/userPalettes";

export const UIContext = createContext();
export const UIDispatchContext = createContext();

export const defaultUsers = [
  {
    username: "dallen12",
    email: "dallenSperms@gmail.com",
    password: "tourDeFrance12!",
    palettes: userPalettes,
  },
  {
    username: "mike",
    email: "mike12@gmail.com",
    password: "Michael12!",
    palettes: [],
  },
];

const initialValues = {
  users: defaultUsers,
  // currentUserIndex: null,
  currentUser: null,
  storedLogIn: { email: "", password: "" },
};

const filterUser = (email, users) =>
  users.filter(user => user.email.toUpperCase() === email.toUpperCase());

// const findUserIndex = (email, users) =>
//   users.findIndex(user => user.email.toUpperCase() === email.toUpperCase());

// const userIndex = findUserIndex("mike12@gmail.com", initialValues.users)[0];

const findUserIndex = (email, users) =>
  users.findIndex(user => user.email.toUpperCase() === email.toUpperCase());

const appReducer = (app, action) => {
  switch (action.type) {
    case "log_in":
      // const index = findUserIndex(action.userInfo.email, app.users);
      // console.log(action.email);

      // const user = filterUser(action.userInfo.email, app.users)[0];

      return {
        ...app,
        // currentUser: { username: user.username, palettes: user.palettes },
        currentUser: action.userInfo,
        // currentUserIndex: index,
        storedLogIn: action.rememberMe
          ? { email: action.userInfo.email, password: action.userInfo.password }
          : initialValues.storedLogIn,
      };

    case "sign_up":
      return {
        // ...app,
        users: [...app.users, { ...action.userInfo, palettes: [] }],
        currentUser: action.userInfo,
        // currentUser: newUser.username,
        storedLogIn: action.rememberMe
          ? { email: action.userInfo.email, password: action.userInfo.password }
          : initialValues.storedLogIn,
      };
    case "log_out":
      return {
        ...app,
        currentUser: null,
        // currentUser: initialValues.currentUser,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export function AppContextProvider({ children }) {
  const [app, UIDispatch] = useReducer(appReducer, initialValues);

  return (
    <UIContext.Provider value={app}>
      <UIDispatchContext.Provider value={UIDispatch}>
        {children}
      </UIDispatchContext.Provider>
    </UIContext.Provider>
  );
}

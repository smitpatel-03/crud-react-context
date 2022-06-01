import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [
    {
      name: "John1",
      id: "1",
    },
    {
      name: "John2",
      id: "2",
    },
    {
      name: "John3",
      id: "3",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvier = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
  const editUser = (id) => {
    dispatch({
      type: "EDIT_USER",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";

const initialState = {
  user: null,
  isAuthenticated: false,
  toggleAuth: () => null,
};

export const authContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    user: null,
    isAuthenticated: false,
  });

  const toggleAuth = (user) => {
    setIsLoggedIn({
      user: user,
      isAuthenticated: !isLoggedIn.isAuthenticated,
    });
  };

  // useEffect(() => {
  //   const userStorage = JSON.parse(localStorage.getItem("user"));

  //   if (userStorage) {
  //     setIsLoggedIn(userStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(isLoggedIn));
  // }, [isLoggedIn]);

  const value = { ...isLoggedIn, toggleAuth };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
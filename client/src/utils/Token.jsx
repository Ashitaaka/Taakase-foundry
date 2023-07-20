import { useState } from "react";

const TokenStorage = () => {
  //function to get token from localStorage
  const getToken = () => {
    const userToken = JSON.parse(localStorage.getItem("taakase_token"));
    return userToken;
  };

  //useState useful to reload component
  const [token, setToken] = useState(getToken());

  //function to save token in localStorage
  const saveToken = (userToken) => {
    localStorage.setItem("taakase_token", JSON.stringify(userToken));
    setToken(getToken());
  };

  //function to remove token from localStorage
  const removeToken = () => {
    localStorage.removeItem("taakase_token");
    setToken(getToken());
  };

  return {
    token,
    setToken : saveToken,
    removeToken,
  };
};

export default TokenStorage;

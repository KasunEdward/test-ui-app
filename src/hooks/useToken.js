import React, { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const clearToken = () => {
    sessionStorage.clear();
    setToken(null);
  }

  return {
    setToken: saveToken,
    clearToken: clearToken,
    token
  }
};

export default useToken;

import { useState, useCallback, useEffect } from "react";

import { PROJECT_ID } from "../util/globalVars";

// let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(null);
  // const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  // const login = useCallback((uid, token, expirationDate) => {
  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    // const tokenExpirationDate =
    //   expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    // setTokenExpirationDate(tokenExpirationDate);

    localStorage.setItem(
      `${PROJECT_ID}__userData`,
      JSON.stringify({
        userId: uid,
        token: token,
        // expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    // setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem(`${PROJECT_ID}__userData`);
  }, []);

  // useEffect(() => {
  //   if (token && tokenExpirationDate) {
  //     const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
  //     logoutTimer = setTimeout(logout, remainingTime);
  //   } else {
  //     clearTimeout(logoutTimer);
  //   }
  // }, [token, logout, tokenExpirationDate]);

  // login after reload page
  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem(`${PROJECT_ID}__userData`)
    );
    if (
      storedData &&
      storedData.token
      // new Date(storedData.expiration) > new Date()
    ) {
      // login(storedData.userId, storedData.token, new Date(storedData.expiration));
      login(storedData.userId, storedData.token);
    }
  }, [login]);

  return { token, login, logout, userId };
};

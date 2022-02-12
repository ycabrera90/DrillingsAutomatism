import { createSlice } from "@reduxjs/toolkit";

import { VAR_PROJECT_ID } from "../util/globalVars";

const initialAuthState = {
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, { payload }) {
      const { userId, token } = payload;
      console.log(payload);
      state.userId = userId;
      state.token = token;

      localStorage.setItem(
        `${VAR_PROJECT_ID}__userData`,
        JSON.stringify({
          userId,
          token,
          // expiration: tokenExpirationDate.toISOString()
        })
      );
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

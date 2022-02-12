import { createSlice } from "@reduxjs/toolkit";

import localStorageDrive from "../util/localStorageDriver";

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

      state.isLoggedIn = true;
      state.userId = userId;
      state.token = token;
      localStorageDrive.setValue("userData", {
        userId,
        token,
      });
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.token = null;
      localStorageDrive.delValue("userData");
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

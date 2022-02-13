import { createSlice } from "@reduxjs/toolkit";

import localStorageDrive from "../util/localStorageDriver";

let initialState = {
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
};

const localStorageData = localStorageDrive.getValue("userData");
if (localStorageData) {
  const { isLoggedIn, userId, token } = localStorageData;
  initialState.isLoggedIn = isLoggedIn;
  initialState.userId = userId;
  initialState.token = token;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, { payload }) {
      const { userId, token } = payload;

      state.isLoggedIn = true;
      state.userId = userId;
      state.token = token;
      localStorageDrive.setValue("userData", {
        userId,
        token,
        isLoggedIn: true,
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

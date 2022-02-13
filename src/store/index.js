import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth-slice";
import { dataReducer } from "./datas-slice";

const store = configureStore({
  reducer: { auth: authReducer, data: dataReducer },
});

export default store;

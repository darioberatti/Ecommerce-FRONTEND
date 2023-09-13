import userReducer from "./user";
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import cartReducer from "./cart";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
  }
})

export default store 
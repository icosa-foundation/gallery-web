import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./states/userslice"

export default configureStore({
  reducer: {
    user: userReducer,
  },
})

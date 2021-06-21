import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./states/userslice"
import userInfoReducer from "./states/userinfoslice"

export default configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
  },
})

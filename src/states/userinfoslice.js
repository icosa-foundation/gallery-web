import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: "userinfo",
  initialState: {
    value: JSON.parse(localStorage.getItem("userinfo")),
  },
  reducers: {
    updateUserInfo: (state, action) => {
      const userInfo = action.payload
      localStorage.setItem("userinfo", JSON.stringify(userInfo))
      state.value = userInfo
    },
    logoutUser: (state) => {
      localStorage.removeItem("userinfo")
      state.value = {}
    },
  },
})

export const { updateUserInfo, logoutUser } = slice.actions

export const getUserInfo = (state) => state.userInfo.value

export default slice.reducer

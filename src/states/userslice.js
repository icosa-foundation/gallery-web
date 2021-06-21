import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("user")),
  },
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload
      localStorage.setItem("user", JSON.stringify(user))
      state.value = user
    },
    logoutUser: (state) => {
      localStorage.removeItem("user")
      localStorage.removeItem("userinfo")
      state.value = {}
    },
  },
})

export const { loginUser, logoutUser } = slice.actions

export const getUser = (state) => state.user.value

export default slice.reducer

import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("user")),
  },
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload
      localStorage.setItem("loginToken", user.token)
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("userid", user.userId)
      state.value = user
    },
    logoutUser: (state) => {
      localStorage.removeItem("loginToken")
      localStorage.removeItem("user")
      localStorage.removeItem("userid")
      state.value = {}
    },
  },
})

export const { loginUser, logoutUser } = slice.actions

export const getUser = (state) => state.user.value

export default slice.reducer

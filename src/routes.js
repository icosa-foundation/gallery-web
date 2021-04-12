import Homepage from "./pages/homepage"
import ViewProject from "./pages/viewproject"
import RegisterUser from "./pages/registeruser"
import LoginUser from "./pages/loginuser"
import Terms from "./pages/terms"
import ViewUser from "./pages/viewuser"
import EditProfile from "./pages/editprofile"

export const Routes = [
  {
    path: "/register",
    exact: true,
    component: RegisterUser,
  },
  {
    path: "/login",
    exact: true,
    component: LoginUser,
  },
  {
    path: "/terms",
    exact: true,
    component: Terms,
  },
  {
    path: "/user/me",
    exact: true,
    component: EditProfile,
  },
  {
    path: "/user/:id",
    exact: true,
    component: ViewUser,
  },
  {
    path: "/view/:id",
    exact: true,
    component: ViewProject,
  },
  {
    path: "/",
    exact: true,
    component: Homepage,
  },
]

import Homepage from "./pages/homepage"
import RegisterUser from "./pages/registeruser"
import LoginUser from "./pages/loginuser"
import Terms from "./pages/terms"
import ViewUser from "./pages/viewuser"
import ViewProject from "./pages/viewproject"
import ViewPolyUser from "./pages/poly/viewuser"
import ViewPolyProject from "./pages/poly/viewproject"
import Dashboard from "./pages/dashboard"

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
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    requiresLogin: true,
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
    path: "/poly/user/:id",
    exact: true,
    component: ViewPolyUser,
  },
  {
    path: "/poly/view/:id",
    exact: true,
    component: ViewPolyProject,
  },
  {
    path: "/",
    exact: true,
    component: Homepage,
  },
]

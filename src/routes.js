import Homepage from "./pages/homepage"
import RegisterUser from "./pages/registeruser"
import LoginUser from "./pages/loginuser"
import Terms from "./pages/terms"
import ViewUser from "./pages/viewuser"
import ViewProject from "./pages/viewproject"
import ViewPolyProject from "./pages/poly/viewproject"
import ViewPolyAll from "./pages/poly/viewall"
import Dashboard from "./pages/dashboard"
import NotFound from "./pages/NotFound"

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
    path: "/poly",
    exact: true,
    component: ViewPolyAll,
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
  {
    path: "*",
    component: NotFound,
  },
]

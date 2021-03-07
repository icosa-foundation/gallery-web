import Homepage from "./pages/homepage"
import ViewProject from "./pages/viewproject"
import RegisterUser from "./pages/registeruser"

export const Routes = [
  {
    path: "/register",
    exact: true,
    component: RegisterUser,
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

import Homepage from "./pages/homepage"
import ViewProject from "./pages/viewproject"

export const Routes = [
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

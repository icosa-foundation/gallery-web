import Homepage from "./pages/homepage"
import UserRegister from "./pages/user/login"
import UserLogin from "./pages/user/register"
import UserView from "./pages/user/view"
import Terms from "./pages/static/terms"
import SketchView from "./pages/sketch/view"
import PolySketchView from "./pages/poly/sketchview"
import PolyViewAll from "./pages/poly/viewall"
import Dashboard from "./pages/dashboard"
import NotFound from "./pages/notfound"

export const Routes = [
  {
    path: "/register",
    exact: true,
    component: UserRegister,
  },
  {
    path: "/login",
    exact: true,
    component: UserLogin,
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
    component: UserView,
  },
  {
    path: "/view/:owner/:id",
    exact: true,
    component: SketchView,
  },
  {
    path: "/poly",
    exact: true,
    component: PolyViewAll,
  },
  {
    path: "/poly/view/:id",
    exact: true,
    component: PolySketchView,
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

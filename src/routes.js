import Homepage from "./pages/homepage"
import UserRegister from "./pages/user/register"
import UserLogin from "./pages/user/login"
import UserForgot from "./pages/user/forgot"
import UserView from "./pages/user/view"
import Terms from "./pages/static/terms"
import SketchView from "./pages/sketch/view"
import SketchEdit from "./pages/sketch/edit"
import PolySketchView from "./pages/poly/sketchview"
import PolyViewAll from "./pages/poly/viewall"
import Uploads from "./pages/uploads"
import Settings from "./pages/settings"
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
    path: "/resetpassword",
    exact: true,
    component: UserForgot,
  },
  {
    path: "/terms",
    exact: true,
    component: Terms,
  },
  {
    path: "/uploads",
    exact: true,
    component: Uploads,
    requiresLogin: true,
  },
  {
    path: "/settings",
    exact: true,
    component: Settings,
    requiresLogin: true
  },
  {
    path: "/user/:id",
    exact: true,
    component: UserView,
  },
  {
    path: "/view/:userid/:id",
    exact: true,
    component: SketchView,
  },
  {
    path: "/edit/:userid/:sketchid",
    exact: true,
    requiresLogin: true,
    component: SketchEdit,
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

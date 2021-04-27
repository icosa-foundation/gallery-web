import React from "react"
import "./helpers"
import "./main.scss"
import { Routes } from "./routes"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { connect } from "react-redux"
import SideNav from "./components/sidenav"
import Header from "./components/header"
import Footer from "./components/footer"
import UserAPI from "./api/user"
import { updateUserInfo } from "./states/userinfoslice"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

const RefreshUserInfo = async (props) => {
  const result = await UserAPI.GetSelf(props.user)
  props.dispatch(updateUserInfo(result))
}

function App(props) {
  /* Get User Info into store */
  if (props.user) {
    RefreshUserInfo(props)
  }
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <SideNav />
          <main>
            <Header />
            <Switch>
              {Routes.map((route, key) => {
                let children = route.component
                if (route.requiresLogin && !props.user) {
                  children = <Redirect to="/login" />
                }
                return <Route key={key} path={route.path} exact={route.exact} children={children}></Route>
              })}
            </Switch>
            <Footer />
          </main>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default connect(mapStateToProps)(App)

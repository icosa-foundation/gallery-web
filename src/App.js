import React from "react"
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
  const navRef = React.createRef()
  const closeNav = () => {
    if (navRef.current) {
      navRef.current.closeNav()
    }
  }
  /* Get User Info into store */
  if (props.user) {
    RefreshUserInfo(props)
  }
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <SideNav innerRef={navRef} />
          <main onClick={closeNav}>
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

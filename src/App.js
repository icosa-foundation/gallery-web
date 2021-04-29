import React from "react"
import "./helpers"
import "./main.scss"
import { Routes } from "./routes"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { connect } from "react-redux"
import SideNav from "./components/layout/sidenav"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
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
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navCollapsed: true }
  }

  componentDidMount() {
    /* Get User Info into store */
    if (this.props.user) {
      this.refreshUserInfo()
    }
  }

  refreshUserInfo = async () => {
    const result = await UserAPI.GetSelf(this.props.user)
    this.props.dispatch(updateUserInfo(result))
  }

  toggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  openNav = () => {
    this.setState({ navCollapsed: false })
  }

  closeNav = () => {
    this.setState({ navCollapsed: true })
  }

  render() {
    return (
      <div className="App">
        <RecoilRoot>
          <Router>
            <SideNav collapsed={this.state.navCollapsed} toggleNav={this.toggleNav} />
            <main
              onClick={(e) => {
                if (!this.state.navCollapsed) {
                  this.closeNav()
                  e.preventDefault()
                  return
                }
              }}
            >
              <Header toggleNav={this.openNav} />
              <Switch>
                {Routes.map((route, key) => {
                  let children = route.component
                  if (route.requiresLogin && !this.props.user) {
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
}

export default connect(mapStateToProps)(App)

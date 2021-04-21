import React from "react"
import "./main.scss"
import { Routes } from "./routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { RecoilRoot } from "recoil"
import SideNav from "./components/sidenav"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <SideNav />
          <main>
            <Header />
            <Switch>
              {Routes.map((route, key) => {
                return <Route key={key} path={route.path} exact={route.exact} children={route.component}></Route>
              })}
            </Switch>
            <Footer />
          </main>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App

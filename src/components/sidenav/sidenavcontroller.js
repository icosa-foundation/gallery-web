import React from "react"
import SideNav from "./sidenav"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  toggleNav = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  closeNav = () => {
    this.setState({ collapsed: true })
  }

  render() {
    return <SideNav collapsed={this.state.collapsed} toggleNav={this.toggleNav} />
  }
}
export default Controller

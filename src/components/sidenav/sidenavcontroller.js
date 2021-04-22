import React from "react"
import SideNav from "./sidenav"
import { connect } from "react-redux"
import { logoutUser } from "../../states/userslice"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
    userInfo: state.userInfo.value,
  }
}
class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      isLoggedIn: props.user && Object.keys(props.user).length !== 0,
      username: props.userInfo ? props.userInfo.displayname : "",
    }
  }

  toggleNav = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  closeNav = () => {
    this.setState({ collapsed: true })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userInfo !== this.props.userInfo) {
      this.setState({
        username: nextProps.userInfo ? nextProps.userInfo.displayname : "",
      })
    }
    if (nextProps.user !== this.props.user) {
      this.setState({
        isLoggedIn: nextProps.user && Object.keys(nextProps.user).length !== 0,
      })
    }
  }

  logout = () => {
    this.props.dispatch(logoutUser())
  }

  render() {
    return (
      <SideNav
        collapsed={this.state.collapsed}
        toggleNav={this.toggleNav}
        username={this.state.username}
        isLoggedIn={this.state.isLoggedIn}
        logout={this.logout}
      />
    )
  }
}
export default connect(mapStateToProps)(Controller)

import React from "react"
import SideNav from "./sidenav"
import { connect } from "react-redux"
import { logoutUser } from "../../../states/userslice"
import { withRouter } from "react-router"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
    userInfo: state.userInfo.value,
  }
}

const categories = [
  {
    name: "Science",
    icon: "flask",
    url: "/science",
  },
  {
    name: "History",
    icon: "landmark",
    url: "/history",
  },
  {
    name: "Animals",
    icon: "paw",
    url: "/animals",
  },
  {
    name: "Technology",
    icon: "microchip",
    url: "/technology",
  },
]
class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: props.collapsed,
      isLoggedIn: props.user && Object.keys(props.user).length !== 0,
      username: props.userInfo ? props.userInfo.displayname : "",
      userurl: props.userInfo ? props.userInfo.url : "",
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsed !== this.props.collapsed) {
      this.setState({ collapsed: this.props.collapsed })
    }
    if (prevProps.userInfo !== this.props.userInfo) {
      this.setState({
        username: this.props.userInfo ? this.props.userInfo.displayname : "",
        userurl: this.props.userInfo ? this.props.userInfo.url : "",
      })
    }
    if (prevProps.user !== this.props.user) {
      this.setState({
        isLoggedIn: this.props.user && Object.keys(this.props.user).length !== 0,
      })
    }
  }

  logout = () => {
    this.props.dispatch(logoutUser())
    this.props.history.push("/")
  }

  render() {
    return (
      <SideNav
        collapsed={this.state.collapsed}
        toggleNav={this.props.toggleNav}
        username={this.state.username}
        isLoggedIn={this.state.isLoggedIn}
        logout={this.logout}
        userUrl={this.state.userurl}
        categories={categories}
      />
    )
  }
}
export default connect(mapStateToProps)(withRouter(Controller))

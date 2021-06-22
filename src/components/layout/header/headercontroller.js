import React from "react"
import Header from "./header"
import { connect } from "react-redux"

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
      isLoggedIn: props.user && Object.keys(props.user).length !== 0,
      username: props.userInfo ? props.userInfo.displayname : "",
      userurl: props.userInfo ? props.userInfo.url : ""
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userInfo !== this.props.userInfo) {
      this.setState({
        username: this.props.userInfo ? this.props.userInfo.displayname : "",
      })
    }
    if (prevProps.user !== this.props.user) {
      this.setState({
        isLoggedIn: this.props.user && Object.keys(this.props.user).length !== 0,
      })
    }
  }

  render() {
    return (
      <Header
        username={this.state.username}
        userid={this.state.userid}
        userurl={this.state.userurl}
        isLoggedIn={this.state.isLoggedIn}
        toggleNav={this.props.toggleNav}
      />
    )
  }
}
export default connect(mapStateToProps)(Controller)

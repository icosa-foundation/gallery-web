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
      username: props.userInfo.displayname ? props.userInfo.displayname : "",
    }
  }

  render() {
    return (
      <Header
        username={this.state.username}
        userid={this.state.userid}
        userurl={this.state.userurl}
        isLoggedIn={this.state.isLoggedIn}
      />
    )
  }
}
export default connect(mapStateToProps)(Controller)

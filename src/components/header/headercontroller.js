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
    }
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

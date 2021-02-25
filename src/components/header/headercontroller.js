import React from "react"
import Header from "./header"
import { connect } from "react-redux"
import UserAPI from "../../api/user"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.user && Object.keys(props.user).length !== 0,
      username: props.user ? props.user.username : "",
    }
    this.getUserInfo(this)
  }

  async getUserInfo(parent) {
    const info = await UserAPI.getUserInfo()
    if (info.error) {
      return
    } else {
      const username = info.username
      parent.setState({ username, isLoggedIn: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        isLoggedIn: Object.keys(this.props.user).length !== 0,
        username: this.props.user.username,
      })
    }
  }

  render() {
    return (
      <Header
        username={this.state.username}
        credits={this.state.credits}
        isLoggedIn={this.state.isLoggedIn}
      />
    )
  }
}
export default connect(mapStateToProps)(Controller)

import React from "react"
import Login from "./login"
import { connect } from "react-redux"
import { loginUser } from "../../states/userslice"
import UserAPI from "../../api/user"
const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: "" }
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = async () => {
    if (!this.state.username || !this.state.password) {
      this.setState({ error: "Please input a valid Username and Password" })
      return
    }
    const result = await UserAPI.Login(this.state.username, this.state.password)
    if (result.error || result.detail) {
      this.setState({
        error: result.error || result.detail[0].msg,
      })
    } else {
      const { access_token } = result
      this.props.dispatch(loginUser({ token: access_token }))
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        changeUsername={this.changeUsername}
        changePassword={this.changePassword}
        error={this.state.error}
        goToRegister={this.goToRegister}
      />
    )
  }
}

export default connect()(Controller)

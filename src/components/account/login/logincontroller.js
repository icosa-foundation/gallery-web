import React from "react"
import Login from "./login"
import { connect } from "react-redux"
import { loginUser } from "../../../states/userslice"
import { updateUserInfo } from "../../../states/userinfoslice"
import UserAPI from "../../../api/user"

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
    const result = await UserAPI.login(this.state.username, this.state.password)
    if (result.error || result.detail) {
      let error = "An Error occurred while logging in" || result.error
      if (result.detail) {
        if (typeof result.detail == "string") {
          error = result.detail
        } else if (result.detail[0]) {
          error = result.detail[0].msg
        }
      }
      this.setState({
        error,
      })
    } else {
      const { access_token, token_type } = result
      const user = { token: access_token, token_type: token_type }
      this.props.dispatch(loginUser(user))
      /* Get Self */
      const resultSelf = await UserAPI.getSelf(user)
      this.props.dispatch(updateUserInfo(resultSelf))
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

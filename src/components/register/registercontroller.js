import React from "react"
import Register from "./register"
import { connect } from "react-redux"
import UserAPI from "../../api/user"
import loginUser from "../../states/userslice"

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

  changeConfirmPassword = (event) => {
    this.setState({ passwordConfirm: event.target.value })
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  changeTacAgree = (event) => {
    this.setState({ tacAgree: event.target.checked })
  }

  handleSubmit = async () => {
    if (!this.state.email) {
      this.setState({ error: "Please input a valid Email" })
      return
    }
    if (!this.state.username || !this.state.password) {
      this.setState({ error: "Please input a valid Username and Password" })
      return
    }
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ error: "Password does not match confirmation" })
      return
    }
    if (this.state.password.length < 6) {
      this.setState({ error: "Password must be over 6 characters long" })
      return
    }
    if (!this.state.email.includes("@")) {
      this.setState({ error: "Please input a valid email" })
      return
    }
    if (!this.state.tacAgree) {
      this.setState({
        error: "You must agree to the terms and conditions to continue",
      })
      return
    }

    const result = await UserAPI.CreateNewUser(
      this.state.username,
      this.state.email,
      this.state.password
    )
    if (result.error || result.detail) {
      this.setState({
        error: result.error || result.detail[0].msg,
      })
    } else {
      const { token, email, displayName } = result.json
      this.props.dispatch(loginUser({ token, email, displayName }))
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <Register
        handleSubmit={this.handleSubmit}
        changeUsername={this.changeUsername}
        changePassword={this.changePassword}
        changeConfirmPassword={this.changeConfirmPassword}
        changeEmail={this.changeEmail}
        changeTacAgree={this.changeTacAgree}
        error={this.state.error}
      />
    )
  }
}

export default connect()(Controller)

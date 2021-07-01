import React from "react"
import Register from "./register"
import { connect } from "react-redux"
import UserAPI from "../../../api/user"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: "" }
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  changeDisplayname = (event) => {
    this.setState({ displayname: event.target.value })
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
    if (!this.state.username || this.state.username.length < 3) {
      this.setState({ error: "Username must be longer than 2 characters " })
      return
    }
    if (!this.state.username.match(/^[a-zA-Z0-9_]*$/g)) {
      this.setState({ error: "Username can only contain letters, numbers, and '_'" })
      return
    }

    if (!this.state.displayname) {
      this.setState({ error: "Please input a Display name" })
      return
    }

    if (!this.state.email) {
      this.setState({ error: "Please input a valid Email" })
      return
    }
    if (!this.state.email.includes("@")) {
      this.setState({ error: "Please input a valid Email" })
      return
    }

    if (!this.state.password) {
      this.setState({ error: "Please input a password" })
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

    if (!this.state.tacAgree) {
      this.setState({
        error: "You must agree to the terms and conditions to continue",
      })
      return
    }

    const result = await UserAPI.createNewUser(this.state.username, this.state.displayname, this.state.email, this.state.password)
    if (result.error || result.detail) {
      let error = "An Error occurred while registering" || result.error
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
      this.props.history.push("/login")
    }
  }

  render() {
    return (
      <Register
        handleSubmit={this.handleSubmit}
        changeUsername={this.changeUsername}
        changeDisplayname={this.changeDisplayname}
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

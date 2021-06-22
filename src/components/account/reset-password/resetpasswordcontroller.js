import React from "react"
import ResetPassword from "./resetpassword"
import { connect } from "react-redux"
import UserAPI from "../../../api/user"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { success: false, error: null }
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = async () => {
    if (!this.state.email) {
      this.setState({ error: "Please input a valid Email" })
      return
    }
    const result = await UserAPI.passwordResetRequest(this.state.email)
    // Abusing js truthy, as API request returns false when it succeeds
    if (result) {
      let error = "An Error occurred while Resetting Password" || result.error
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
      this.setState({ error: null, success: true, email: "" })
    }
  }

  render() {
    return (
      <ResetPassword handleSubmit={this.handleSubmit} changeEmail={this.changeEmail} success={this.state.success} />
    )
  }
}

export default connect()(Controller)

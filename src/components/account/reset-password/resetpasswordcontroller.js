import React from "react"
import ResetPassword from "./resetpassword"
import NewPassword from "./newPassword"
import UserAPI from "../../../api/user"
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' 

class Controller extends React.Component {
  constructor(props) {
    super(props)
    let params = queryString.parse(this.props.location.search)

    this.state = { success: false, error: null, token: params.token ?? null }
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  changeConfirmPassword = (event) => {
    this.setState({ passwordConfirm: event.target.value })
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

  handleResetSubmit = async () => {
    if (!this.state.password || !this.state.passwordConfirm) {
      this.setState({ error: "Please input your password in both fields"})
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
    
    const result = await UserAPI.passwordResetToken(this.state.token, this.state.password)
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
      this.setState({ error: null, success: true, password: "", passwordConfirm: "" })
    }
  }

  render() {
    return (this.state.token ?
      <NewPassword 
        handleSubmit={this.handleResetSubmit} 
        changePassword={this.changePassword} 
        changeConfirmPassword={this.changeConfirmPassword} 
        success={this.state.success} 
        error={this.state.error} 
      /> :
      <ResetPassword 
        handleSubmit={this.handleSubmit} 
        changeEmail={this.changeEmail} 
        success={this.state.success} 
        error={this.state.error} 
      />
    )
  }
}

export default connect()(withRouter(Controller))

import React from "react"
import MyDetails from "./mydetails"
import UserAPI from "../../../api/user"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}
class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.loadUser()
    this.state = { user: null, error: "" }
  }

  loadUser = async () => {
    const user = await UserAPI.getSelf(this.props.user)
    this.setState({ user })
  }

  handleSubmit = async (values) => {
    if (this.state.user.email !== values.email) {
      if (values.email !== values.emailconfirm) {
        this.setState({ error: "Email addresses must match" })
        return
      }
      await UserAPI.updateEmail(this.props.user, values.email, values.currentpassword)
    }
    if (values.password) {
      if (values.password !== values.passwordconfirm) {
        this.setState({ error: "Passwords must match" })
        return
      }
      await UserAPI.updatePassword(this.props.user, values.password, values.currentpassword)
    }
    await UserAPI.updateUser(this.props.user, values.username, values.displayname, values.description)
  }

  render() {
    return <MyDetails handleSubmit={this.handleSubmit} user={this.state.user} error={this.state.error} />
  }
}
export default connect(mapStateToProps)(Controller)

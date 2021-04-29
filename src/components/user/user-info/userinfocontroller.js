import React from "react"
import UserInfo from "./userinfo"
import UserAPI from "../../../api/user"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { info: {} }
  }

  componentDidMount() {
    this.getContent()
  }

  async getContent() {
    const userinfo = await UserAPI.GetUser(this.props.id)
    this.setState({ info: userinfo })
  }
  render() {
    return <UserInfo info={this.state.info} />
  }
}

export default Controller

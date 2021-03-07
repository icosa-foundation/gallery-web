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

  componentDidMount() {
    this.getUserInfo(this)
  }

  async getUserInfo(parent) {
    if (!parent.props.user) {
      return
    }
    const result = await UserAPI.GetSelf(parent.props.user)
    if (result.displayname) {
      parent.setState({
        isLoggedIn: true,
        username: result.displayname,
        userid: result.token,
      })
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.getUserInfo(this)
    }
  }

  render() {
    return (
      <Header
        username={this.state.username}
        userid={this.state.userid}
        isLoggedIn={this.state.isLoggedIn}
      />
    )
  }
}
export default connect(mapStateToProps)(Controller)

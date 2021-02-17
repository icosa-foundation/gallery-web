import React from "react"
import Header from "./header"
import { connect } from "react-redux"
const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

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
      credits: "",
    }
    this.getUserInfo(this)
    setTimeout(() => this.getUserInfo(this), 5000)
  }

  async getUserInfo(parent) {
    const result = await fetch(api_root + "/user/info", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("loginToken"),
      }),
    })
    const json = await result.json()
    if (json.error) {
      return
    } else {
      const username = json.user.username
      parent.setState({ username })
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

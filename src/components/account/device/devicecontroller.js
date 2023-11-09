import React from "react"
import Device from "./device"
import UserAPI from "../../../api/user"
import {connect} from "react-redux";

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
      deviceCode: null
    }
  }

  componentDidMount() {
    this.getContent()
  }

  componentDidUpdate(prevProps){
    if (prevProps.user !== this.props.user) {
      this.setState({
        isLoggedIn: this.props.user && Object.keys(this.props.user).length !== 0,
      })
    }
  }


  async getContent() {
    let deviceCode = null;
    if (this.props.user != null) deviceCode = await UserAPI.getDeviceCode(this.props.user)
    this.setState({ deviceCode: deviceCode })
  }
  render() {
    return <Device isLoggedIn={this.state.isLoggedIn} deviceCode={this.state.deviceCode} />
  }
}
export default connect(mapStateToProps)(Controller)
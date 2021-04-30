import React from "react"
import UserSelfAssets from "./userselfassets"
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
    this.state = { content: [] }
  }

  componentDidMount() {
    this.getContent()
  }

  render() {
    return <UserSelfAssets content={this.state.content} />
  }

  async getContent() {
    const sketches = await UserAPI.GetSelfAssets(this.props.user)
    this.setState({ content: sketches })
  }
}
export default connect(mapStateToProps)(Controller)

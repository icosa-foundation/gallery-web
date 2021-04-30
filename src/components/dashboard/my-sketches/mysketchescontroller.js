import React from "react"
import MySketches from "./mysketches"
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

  async getContent() {
    const sketches = await UserAPI.GetSelfAssets(this.props.user)
    this.setState({ content: sketches })
  }

  render() {
    return <MySketches content={this.state.content} />
  }
}
export default connect(mapStateToProps)(Controller)

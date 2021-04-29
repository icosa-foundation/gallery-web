import React from "react"
import AssetInfo from "./assetinfo"
import ProjectsAPI from "../../../api/projects"
import PolyProjectsAPI from "../../../api/poly/projects"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { info: null }
  }

  componentDidMount() {
    this.getContent()
  }

  async getContent() {
    if (this.props.isPoly) {
      const assetInfo = await PolyProjectsAPI.getProject(this.props.id)
      this.setState({ info: assetInfo })
    } else {
      const assetInfo = await ProjectsAPI.getProject(this.props.id)
      this.setState({ info: assetInfo })
    }
  }

  render() {
    return <AssetInfo info={this.state.info} />
  }
}

export default Controller

import React from "react"
import AssetInfo from "./assetinfo"
import ProjectsAPI from "../../api/projects"

class Controller extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { info: [] }
  }

  componentDidMount() {
    this.getContent()
  }


  async getContent() {
    const assetInfo = await ProjectsAPI.getProject(this.props.id)
    this.setState({ info: assetInfo})
  }

  render() {
    return <AssetInfo info={this.state.info} />
  }
}

export default Controller

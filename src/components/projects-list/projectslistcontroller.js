import React from "react"
import ProjectsList from "./projectslist"
import PolyProjectsAPI from "../../api/poly/projects"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: [] }
  }

  componentDidMount() {
    this.getContent()
  }

  render() {
    return <ProjectsList content={this.state.content} />
  }

  async getContent() {
    const projects = await PolyProjectsAPI.getProjectList("full", 25, 0)
    this.setState({ content: projects })
  }
}
export default Controller

import React from "react"
import ProjectsList from "./projectslist"
import ProjectsAPI from "../../api/projects"
import PolyProjectsAPI from "../../api/poly/projects"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: [] }
  }

  componentDidMount() {
    this.getContent()
  }

  async getContent() {
    if (this.props.isPoly) {
      const projects = await PolyProjectsAPI.getProjectList("full", 25, 0)
      this.setState({ content: projects })
    } else {
      const projects = await ProjectsAPI.getProjectList("full", 25, 0)
      this.setState({ content: projects })
    }
  }

  render() {
    return <ProjectsList content={this.state.content} isPoly={this.props.isPoly} />
  }
}
export default Controller

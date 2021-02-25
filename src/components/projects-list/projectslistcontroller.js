import React from "react"
import ProjectsList from "./projectslist"
import ProjectsAPI from "../../api/projects"

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
    const projects = await ProjectsAPI.getProjectList("featured", 25, 0)
    this.setState({ content: projects })
  }
}
export default Controller

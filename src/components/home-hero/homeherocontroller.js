import React from "react"
import HomeHero from "./homehero"
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
    return <HomeHero content={this.state.content} />
  }

  async getContent() {
    const projects = await ProjectsAPI.getProjectList("featured", 3, 0)
    this.setState({ content: projects })
  }
}
export default Controller

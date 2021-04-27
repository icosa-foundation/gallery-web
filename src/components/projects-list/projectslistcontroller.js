import React from "react"
import ProjectsList from "./projectslist"
import ProjectsAPI from "../../api/projects"
import PolyProjectsAPI from "../../api/poly/projects"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: [], page: 0 }
  }

  componentDidMount() {
    this.getContent()
    window.addEventListener("scroll", this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false)
  }

  handleScroll = (e) => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if (bottom) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.getContent()
      })
    }
  }

  async getContent() {
    let projects = []
    if (this.props.isPoly) {
      projects = await PolyProjectsAPI.getProjectList("full", 25, this.state.page)
    } else {
      projects = await ProjectsAPI.getProjectList("full", 25, this.state.page)
    }
    const content = this.state.content
    for (const p of projects) {
      let isUnique = true
      for (const c of content) {
        if (c.name === p.name) {
          isUnique = false
          break
        }
      }
      if (isUnique) {
        content.push(p)
      }
    }
    this.setState({ content })
  }

  render() {
    return <ProjectsList content={this.state.content} isPoly={this.props.isPoly} />
  }
}
export default Controller

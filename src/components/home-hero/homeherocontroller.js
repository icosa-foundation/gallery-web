import React from "react"
import HomeHero from "./homehero"
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
    return <HomeHero content={this.state.content} />
  }

  async getContent() {
    const featured = ["ervEzbIlddY", "cNtBlok7QaS", "d-HKDBNRM9t", "0EuG9iDWMik"]
    const projects = []
    for (const f of featured) {
      const sketch = await PolyProjectsAPI.getProject(f)
      projects.push(sketch)
    }
    this.setState({ content: projects })
  }
}
export default Controller

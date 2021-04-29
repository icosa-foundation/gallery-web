import React from "react"
import ProjectsList from "./projectslist"
import AssetsAPI from "../../../api/assets"
import PolyAssetsAPI from "../../../api/poly/assets"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: [], page: 0, loading: true }
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
    if (bottom && !this.state.loading) {
      this.setState({ page: this.state.page + 1 }, () => {
        console.log(this.state.page)
        this.getContent()
      })
    }
  }

  async getContent() {
    this.setState({ loading: true })
    let projects = []
    if (this.props.isPoly) {
      projects = await PolyAssetsAPI.getAssetList("full", 24, this.state.page)
    } else {
      projects = await AssetsAPI.getAssetList("full", 24, this.state.page)
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
    this.setState({ content, loading: false })
  }

  render() {
    return <ProjectsList content={this.state.content} isPoly={this.props.isPoly} loading={this.state.loading} />
  }
}
export default Controller

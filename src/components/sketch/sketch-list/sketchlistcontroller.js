import React from "react"
import SketchList from "./sketchlist"
import AssetsAPI from "../../../api/assets"
import PolyAssetsAPI from "../../../api/poly/assets"
import UserAPI from "../../../api/user"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: [], page: 0, loading: true, usePolyList: props.isPoly, useUserList: props.userId }
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
        this.getContent()
      })
    }
  }

  async getContent() {
    this.setState({ loading: true })
    let sketches = []
    if (this.state.useUserList) {
      sketches = await UserAPI.getUserAssets(this.state.useUserList)
    } else if (this.state.usePolyList) {
      sketches = await PolyAssetsAPI.getAssetList("full", 24, this.state.page)
    } else {
      sketches = await AssetsAPI.getAssetList("full", 24, this.state.page)
    }
    if (sketches.length < 24 && !this.state.usePolyList) {
      this.setState({ usePolyList: true, page: -1 })
    }
    const content = this.state.content
    for (const s of sketches) {
      let isUnique = true
      for (const c of content) {
        if (c.name === s.name) {
          isUnique = false
          break
        }
      }
      if (isUnique) {
        content.push(s)
      }
    }
    this.setState({ content, loading: false })
  }

  render() {
    return <SketchList content={this.state.content} isPoly={this.props.isPoly} loading={this.state.loading} />
  }
}
export default Controller

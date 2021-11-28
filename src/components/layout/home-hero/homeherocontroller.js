import React from "react"
import HomeHero from "./homehero"
import AssetsAPI from "../../../api/assets"

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
    const firstFeatured = await AssetsAPI.getAssetList(4, 0, true)
    this.setState({ content: firstFeatured })
  }
}
export default Controller

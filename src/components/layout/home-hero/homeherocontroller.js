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
    const featured = ["62897006741315349", "62896560660307665", "62896737995480789", "62889376153102605"]
    const sketches = []
    for (const f of featured) {
      const sketch = await AssetsAPI.getAssetId(f)
      sketches.push(sketch)
    }
    this.setState({ content: sketches })
  }
}
export default Controller

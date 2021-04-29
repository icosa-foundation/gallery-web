import React from "react"
import HomeHero from "./homehero"
import PolyAssetsAPI from "../../../api/poly/assets"

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
    const sketches = []
    for (const f of featured) {
      const sketch = await PolyAssetsAPI.getAsset(f)
      sketches.push(sketch)
    }
    this.setState({ content: sketches })
  }
}
export default Controller

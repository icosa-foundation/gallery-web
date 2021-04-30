import React from "react"
import SketchInfo from "./sketchinfo"
import AssetsAPI from "../../../api/assets"
import PolyAssetsAPI from "../../../api/poly/assets"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { info: null }
  }

  componentDidMount() {
    this.getContent()
  }

  async getContent() {
    if (this.props.isPoly) {
      const info = await PolyAssetsAPI.getAsset(this.props.id)
      this.setState({ info })
    } else {
      const info = await AssetsAPI.getAsset(this.props.id)
      this.setState({ info })
    }
  }

  render() {
    return <AssetInfo info={this.state.info} />
  }
}

export default Controller

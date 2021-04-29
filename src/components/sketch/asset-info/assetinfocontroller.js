import React from "react"
import AssetInfo from "./assetinfo"
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
      const assetInfo = await PolyAssetsAPI.getAsset(this.props.id)
      this.setState({ info: assetInfo })
    } else {
      const assetInfo = await AssetsAPI.getAsset(this.props.id)
      this.setState({ info: assetInfo })
    }
  }

  render() {
    return <AssetInfo info={this.state.info} />
  }
}

export default Controller

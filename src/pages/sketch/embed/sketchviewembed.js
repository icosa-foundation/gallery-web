import React from "react"
import { withRouter } from "react-router"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchview.scss"
import Loader from "../../../components/ui/loader"
import AssetsAPI from "../../../api/assets"

class SketchViewEmbed extends React.Component {
  constructor(props) {
    const { id, userid } = props.match.params
    super(props)
    this.state = { loading: true, id, userid }
    this.getAsset()
  }

  getAsset = async () => {
    const asset = await AssetsAPI.getAsset(this.state.userid, this.state.id)
    this.setState({ asset: asset, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <SketchViewer asset={this.state.asset} />
    )
  }
}

export default withRouter(SketchViewEmbed)

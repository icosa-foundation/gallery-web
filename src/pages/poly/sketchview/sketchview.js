import React from "react"
import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchview.scss"
import Loader from "../../../components/ui/loader"
import PolyAssetsAPI from "../../../api/poly/assets"

class SketchView extends React.Component {
  constructor(props) {
    const { id, userid } = props.match.params
    super(props)
    this.state = { loading: true, id, userid }
    this.getAsset()
  }

  getAsset = async () => {
    const asset = await PolyAssetsAPI.getAsset(this.state.id)
    this.setState({ asset: asset, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <div>
        <SketchViewer asset={this.state.asset} isPoly={true}/>
        <SketchInfo id={this.state.id} isPoly={true}/>
      </div>
    )
  }
}

export default withRouter(SketchView)

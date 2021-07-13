import React from "react"
import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchview.scss"
import Loader from "../../../components/ui/loader"
import AssetsAPI from "../../../api/assets"

class SketchView extends React.Component {
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
      <div>
        <SketchViewer asset={this.state.asset} />
        <SketchInfo id={this.state.id} userid={this.state.userid} />
      </div>
    )
  }
}

export default withRouter(SketchView)

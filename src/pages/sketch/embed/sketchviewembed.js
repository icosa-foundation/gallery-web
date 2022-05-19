import React from "react"
import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchviewembed.scss"
import Loader from "../../../components/ui/loader"
import AssetsAPI from "../../../api/assets"

class SketchViewEmbed extends React.Component {
  constructor(props) {
    const { id, userid } = props.match.params
    super(props)
    const params = new URLSearchParams(props.location.search)
    this.state = { loading: true, id, userid, params }
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
      <div className="sketchviewer-embedded" style={{width: "100%", height: "100%"}}>
        <SketchViewer asset={this.state.asset} embedded={true}/>
        {this.state.params.has('footer') == true && 
          <div className="embedded-footer">
            <SketchInfo id={this.state.id} userid={this.state.userid} />
          </div>
        }
      </div>
    )
  }
}

export default withRouter(SketchViewEmbed)

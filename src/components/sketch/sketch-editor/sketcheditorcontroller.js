import React from "react"
import SketchEditor from "./sketcheditor"
import Loader from "../../ui/loader"
import AssetsAPI from "../../../api/assets"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
    this.loadAsset()
  }

  loadAsset = async () => {
    const asset = await AssetsAPI.getAsset(this.props.user, this.props.id)
    this.setState({ loading: false, asset })
    console.log(asset)
  }

  render() {
    if (this.state.loading || !this.state.asset) {
      return <Loader />
    }
    return <SketchEditor asset={this.state.asset} />
  }
}

export default Controller

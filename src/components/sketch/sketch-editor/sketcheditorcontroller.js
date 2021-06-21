import React from "react"
import SketchEditor from "./sketcheditor"
import Loader from "../../ui/loader"
import AssetsAPI from "../../../api/assets"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, error: null }
    this.loadAsset()
  }

  loadAsset = async () => {
    const asset = await AssetsAPI.getAsset(this.props.userid, this.props.id)
    this.setState({ loading: false, asset })
  }

  handleSubmit = async (values) => {
    const result = await AssetsAPI.updateAsset(
      this.state.asset.id,
      this.props.user,
      values.title,
      this.state.asset.url,
      values.description,
      values.visibility
    )
  }

  render() {
    if (this.state.loading || !this.state.asset) {
      return <Loader />
    }
    return <SketchEditor asset={this.state.asset} handleSubmit={this.handleSubmit} error={this.state.error} />
  }
}

export default Controller

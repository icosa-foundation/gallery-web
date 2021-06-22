import React from "react"
import SketchEditor from "./sketcheditor"
import Loader from "../../ui/loader"
import AssetsAPI from "../../../api/assets"
import { withRouter } from "react-router"

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
    
    if (result.error || result.detail) {
      let error = "An error occurred while updating your asset" || result.error
      if (result.detail) {
        if (typeof result.detail == "string") {
          error = result.detail
        } else if (result.detail[0]) {
          error = result.detail[0].msg
        }
      }
      this.setState({
        error,
      })
    } else {
      this.setState({ error: null })
      this.props.history.push(`/view/${result.ownerurl}/${result.url}`)
    }
  }

  render() {
    if (this.state.loading || !this.state.asset) {
      return <Loader />
    }
    return <SketchEditor asset={this.state.asset} handleSubmit={this.handleSubmit} error={this.state.error} />
  }
}

export default withRouter(Controller)

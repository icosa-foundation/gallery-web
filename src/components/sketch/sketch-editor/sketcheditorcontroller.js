import React from "react"
import SketchEditor from "./sketcheditor"
import Loader from "../../ui/loader"
import AssetsAPI from "../../../api/assets"
import { withRouter } from "react-router"
import {connect} from "react-redux";
const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

class Controller extends React.Component {
  SUPPORTED_EXTENSIONS = ["jpg", "jpeg", "png"]
  constructor(props) {
    super(props)
    this.state = { loading: true, error: null }
    this.loadAsset()
  }

  loadAsset = async () => {
    const asset = await AssetsAPI.getAsset(this.props.userid, this.props.id)
    this.setState({ loading: false, asset })
  }

  fileUpload = async (thumbFile) => {
    // this.setState({ error: "", success: false })
    const extension = thumbFile.name.split(".").pop().toLowerCase()
    console.log(`extension: ${extension}`);
    if (this.SUPPORTED_EXTENSIONS.indexOf(extension) === -1) {
      console.log(`unsupported: ${extension}`);
      this.setState({
        loading: false,
        error: "Invalid Extension, must be one of the following: " + this.SUPPORTED_EXTENSIONS.join(","),
      })
      return
    }
  }

  handleSubmit = async (values) => {

    // If thumbnail isn't a file instance then pass null to indicate it's unchanged
    let thumbnail = (values.thumbnail instanceof File) ? values.thumbnail : null;

    const result = await AssetsAPI.updateAsset(
      this.state.asset.id,
      this.props.user,
      values.title,
      thumbnail,
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

export default connect(mapStateToProps)(withRouter(Controller))

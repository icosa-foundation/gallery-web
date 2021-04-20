import React from "react"
import UploadToPoly from "./uploadtopoly"
import FilesAPI from "../../api/files"
import { connect } from "react-redux"
const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

class Controller extends React.Component {
  SUPPORTED_EXTENSIONS = ["glb", "gltf", "tilt"]
  constructor(props) {
    super(props)
    this.state = { loading: false, error: "", success: false }
  }

  onFileLoaded = async (event) => {
    try {
      const result = await FilesAPI.uploadFile(event.target.result, this.props.user.token)
      console.log(result)
    } catch (error) {
      this.setState({ loading: false, error: "An Error occured while uploading the file: ERR_SERVER_ERROR" })
    }
  }

  onFileUpload = async (event) => {
    this.setState({ error: "", success: false })
    const extension = event.target.files[0].name.split(".").pop()
    if (this.SUPPORTED_EXTENSIONS.indexOf(extension) === -1) {
      this.setState({
        loading: false,
        error: "Invalid Extension, must be one of the following: " + this.SUPPORTED_EXTENSIONS.join(","),
      })
      return
    }
    this.setState({ loading: true })
    try {
      const result = await FilesAPI.uploadFile(event.target.files[0], this.props.user)
      if (result.id) {
        this.setState({ loading: false, success: true })
      }
    } catch (error) {
      this.setState({ loading: false, error: "An Error occured while uploading the file: ERR_SERVER_ERROR" })
    }
  }

  render() {
    return (
      <UploadToPoly
        onFileUpload={this.onFileUpload}
        loading={this.state.loading}
        error={this.state.error}
        success={this.state.success}
      />
    )
  }
}

export default connect(mapStateToProps)(Controller)

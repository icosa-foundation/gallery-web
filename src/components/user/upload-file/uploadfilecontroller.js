import React from "react"
import UploadFile from "./uploadfile"
import AssetsAPI from "../../../api/assets"
import { connect } from "react-redux"
const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

class Controller extends React.Component {
  SUPPORTED_EXTENSIONS = ["glb", "gltf", "bin"]
  constructor(props) {
    super(props)
    this.state = { loading: false, error: "", success: false }
  }

  onFileUpload = async (event) => {
    this.setState({ error: "", success: false })
    const files = [...event.target.files]
    files.forEach((element) => {
      const extension = element.name.split(".").pop()
      if (this.SUPPORTED_EXTENSIONS.indexOf(extension) === -1) {
        this.setState({
          loading: false,
          error: "Invalid Extension, must be one of the following: " + this.SUPPORTED_EXTENSIONS.join(","),
        })
        return
      }
    })
    this.setState({ loading: true })
    try {
      const result = await AssetsAPI.uploadFile(files, this.props.user)
      if (result.upload_job) {
        this.setState({ loading: false, success: true, error: "" })
      }
    } catch (error) {
      this.setState({ loading: false, error: "An Error occured while uploading the file: ERR_SERVER_ERROR" })
    }
  }

  render() {
    return (
      <UploadFile
        onFileUpload={this.onFileUpload}
        loading={this.state.loading}
        error={this.state.error}
        success={this.state.success}
      />
    )
  }
}

export default connect(mapStateToProps)(Controller)

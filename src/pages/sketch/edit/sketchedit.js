import React from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import SketchEditor from "../../../components/sketch/sketch-editor"
import Loader from "../../../components/ui/loader"
import UserAPI from "../../../api/user"
import "./sketchedit.scss"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

class SketchView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, selfAssets: [] }
    this.getUserInfo()
  }

  getUserInfo = async () => {
    const selfAssets = await UserAPI.getSelfAssets(this.props.user)
    this.setState({ selfAssets, loading: false })
  }

  render() {
    const { sketchid, userid } = this.props.match.params
    const { user } = this.props
    if (this.state.loading) {
      return <Loader />
    }
    let valid = false
    for (const asset of this.state.selfAssets) {
      if (asset.url === sketchid) {
        valid = true
        break
      }
    }
    if (!valid) {
      return <Redirect to={`/view/${userid}/${sketchid}`} />
    }
    return (
      <div className="sketchedit">
        <div className="viewer">
          <SketchViewer id={sketchid} userid={userid} />
        </div>
        <div className="editor">
          <SketchEditor id={sketchid} userid={userid} user={user} />
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(SketchView))

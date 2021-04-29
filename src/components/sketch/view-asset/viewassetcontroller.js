import React from "react"
import ViewAsset from "./viewasset"
import { Viewer as IcosaViewer } from "icosa-viewer"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.viewerReference = React.createRef()
  }

  componentDidMount() {
    const viewer = new IcosaViewer(this.viewerReference.current)
    viewer.loadPolyAsset(this.props.id)
  }

  render() {
    return <ViewAsset viewerReference={this.viewerReference} />
  }
}

export default Controller

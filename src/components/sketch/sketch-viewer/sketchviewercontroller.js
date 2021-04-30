import React from "react"
import SketchViewer from "./sketchviewer"
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
    return <SketchViewer viewerReference={this.viewerReference} />
  }
}

export default Controller

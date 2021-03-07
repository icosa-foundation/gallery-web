import React from "react"
import ViewAsset from "./viewasset"
import { Viewer as IcosaViewer } from "icosa-viewer/dist/icosa-viewer.module"
import _uniqueId from "lodash/uniqueId"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.viewerReference = React.createRef()
  }

  componentDidMount() {
    const viewer = new IcosaViewer(this.viewerReference.current)
    viewer.load(this.props.id)
  }

  render() {
    return <ViewAsset viewerReference={this.viewerReference} />
  }
}

export default Controller

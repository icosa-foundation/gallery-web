import React from "react"
import ViewAsset from "./viewasset"
import {Viewer as IcosaViewer} from "icosa-viewer/dist/icosa-viewer.module"

class Controller extends React.Component {
  
  componentDidMount() {
    const viewer = new IcosaViewer();
    viewer.load(this.props.id)
  }

  render() {
    return <ViewAsset />
  }
}

export default Controller

import React from "react"
import SketchViewer from "./sketchviewer"
import { Viewer as IcosaViewer } from "icosa-viewer"
import PolyAssetsAPI from "../../../api/poly/assets"
import AssetsAPI from "../../../api/assets"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.viewerReference = React.createRef()
  }

  componentDidMount() {
    const viewer = new IcosaViewer(this.viewerReference.current)

    if(!this.props.isPoly) {
      const format = AssetsAPI.getPreferredFormat(this.props.asset)

      switch (format.format) {
        case "GLTF2":
          viewer.loadGltf(format.url)
          break
        case "GLTF":
          viewer.loadGltf1(format.url)
          break
        default:
          break
      }
    } else {
      const format = PolyAssetsAPI.getPreferredFormat(this.props.asset)

      switch (format.formatType) {
        case "GLTF2":
          viewer.loadGltf(format.root.url)
          break
        case "GLTF":
          viewer.loadGltf1(format.root.url)
          break
        default:
          break
      }
    }
    
  }

  render() {
    return <SketchViewer viewerReference={this.viewerReference} />
  }
}

export default Controller

import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchview.scss"

function SketchView(props) {
  const { id } = props.match.params
  return (
    <div>
      <SketchViewer id={id} />
      <SketchInfo id={id} />
    </div>
  )
}

export default withRouter(SketchView)

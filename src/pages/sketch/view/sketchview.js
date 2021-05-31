import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchview.scss"

function SketchView(props) {
  const { id, user } = props.match.params

  return (
    <div>
      <SketchViewer id={id} user={user} />
      <SketchInfo id={id} user={user} />
    </div>
  )
}

export default withRouter(SketchView)

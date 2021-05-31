import { withRouter } from "react-router"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchedit.scss"

function SketchView(props) {
  const { id, user } = props.match.params

  return (
    <div>
      <SketchViewer id={id} user={user} />
    </div>
  )
}

export default withRouter(SketchView)

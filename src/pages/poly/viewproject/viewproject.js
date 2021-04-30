import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./viewproject.scss"

function ViewProject(props) {
  const { id } = props.match.params
  return (
    <div>
      <SketchViewer id={id} isPoly={true} />
      <SketchInfo id={id} isPoly={true} />
    </div>
  )
}

export default withRouter(ViewProject)

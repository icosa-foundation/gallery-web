import { withRouter } from "react-router"
import SketchInfo from "../../components/sketch/sketch-info"
import ViewAsset from "../../components/sketch/view-asset"
import "./viewproject.scss"

function ViewProject(props) {
  const { id } = props.match.params
  return (
    <div>
      <ViewAsset id={id} />
      <SketchInfo id={id} />
    </div>
  )
}

export default withRouter(ViewProject)

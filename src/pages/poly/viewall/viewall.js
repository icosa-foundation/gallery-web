import { withRouter } from "react-router"
import ProjectsList from "../../../components/projects-list"
import "./viewall.scss"

function ViewProject(props) {
  const { id } = props.match.params
  return (
    <div>
      <h3>Google Poly Projects</h3>
      <ProjectsList isPoly={true} />
    </div>
  )
}

export default withRouter(ViewProject)

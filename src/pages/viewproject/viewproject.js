import { Container, Row, Col } from "react-bootstrap"
import {withRouter} from 'react-router'
import ViewAsset from "../../components/view-asset";
import "./viewproject.scss"


function ViewProject(props) {
  const {id} = props.match.params
  return (
    <div>
      <ViewAsset id={id}/>
    </div>
  )
}

export default withRouter(ViewProject)

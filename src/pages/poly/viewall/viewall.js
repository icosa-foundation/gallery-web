import { withRouter } from "react-router"
import { Container, Row, Col } from "react-bootstrap"
import ProjectsList from "../../../components/projects-list"
import "./viewall.scss"

function ViewProject(props) {
  const { id } = props.match.params
  return (
    <Container>
      <Row>
        <Col>
          <h3>Google Poly Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsList isPoly={true} />
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(ViewProject)

import { withRouter } from "react-router"
import { Container, Row, Col } from "react-bootstrap"
import SketchList from "../../../components/sketch/sketch-list"
import "./viewall.scss"

function ViewSketch(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Google Poly Sketches</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <SketchList isPoly={true} />
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(ViewSketch)

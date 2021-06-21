import { Container, Row, Col } from "react-bootstrap"
import "./notfound.scss"

function NotFound() {
  return (
    <Container>
      <Row className="notfound">
        <Col>
          <h1>404 - Page Not Found</h1>
          <h4>We're sorry, we can't find the page you're looking for</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound

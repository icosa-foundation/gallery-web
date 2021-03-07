import { Container, Row, Col } from "react-bootstrap"
import "./loginuser.scss"

function LoginUser(props) {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          Log In
          <a href="/register">Register</a>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginUser

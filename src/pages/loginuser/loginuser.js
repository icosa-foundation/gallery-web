import { Container, Row, Col } from "react-bootstrap"
import Login from "../../components/account/login"
import "./loginuser.scss"

function LoginUser(props) {
  return (
    <Container className="loginuser">
      <Row>
        <Col className="text-center">
          <h2>LOG IN</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Login history={props.history} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <a href="/resetpassword">Forgot Password?</a>
          <br />
          <a href="/register">Register a new account</a>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginUser

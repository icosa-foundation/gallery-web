import { Container, Row, Col } from "react-bootstrap"
import Login from "../../../components/account/login"
import { Link } from "react-router-dom"
import "./userlogin.scss"

function UserLogin(props) {
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
          <Link to="/resetpassword">Forgot Password?</Link>
          <br />
          <Link to="/register">Register a new account</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default UserLogin

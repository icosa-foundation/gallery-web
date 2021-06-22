import { Container, Row, Col } from "react-bootstrap"
import ResetPassword from "../../../components/account/reset-password"
import "./userforgot.scss"

function UserLogin(props) {
  return (
    <Container className="forgot-password">
      <Row>
        <Col className="text-center">
          <h2>FORGOT PASSWORD</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <ResetPassword />
        </Col>
      </Row>
    </Container>
  )
}

export default UserLogin

import { Container, Row, Col } from "react-bootstrap"
import Register from "../../../components/account/register"
import "./userregister.scss"

function UserRegister(props) {
  return (
    <Container className="userregister">
      <Row>
        <Col className="text-center">
          <h2>REGISTER</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Register history={props.history} />
        </Col>
      </Row>
    </Container>
  )
}

export default UserRegister

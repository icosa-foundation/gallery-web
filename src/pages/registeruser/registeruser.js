import { Container, Row, Col } from "react-bootstrap"
import Register from "../../components/register"
import "./registeruser.scss"

function RegisterUser(props) {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Register />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterUser

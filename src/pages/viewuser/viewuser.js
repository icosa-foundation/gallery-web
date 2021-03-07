import { Container, Row, Col } from "react-bootstrap"
import UserInfo from "../../components/user-info"
import "./viewuser.scss"

function ViewUser(props) {
  const { id } = props.match.params
  return (
    <Container>
      <Row>
        <Col>
          <UserInfo id={id} />
        </Col>
      </Row>
    </Container>
  )
}

export default ViewUser

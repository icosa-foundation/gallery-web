import { Container, Row, Col } from "react-bootstrap"
import UserInfo from "../../../components/user/user-info"
import "./userview.scss"

function UserView(props) {
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

export default UserView

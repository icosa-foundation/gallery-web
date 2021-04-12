import { Container, Row, Col } from "react-bootstrap"
import PolyConnect from "../../components/polyconnect"
import "./editprofile.scss"

function EditProfile(props) {
  const { id } = props.match.params
  return (
    <Container>
      <Row>
        <Col>
          <h1>User profile</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Connect with Google Poly</h2>
          <p>Note: This functionality will be unavailble from June 30th 2021</p>
          <PolyConnect />
        </Col>
      </Row>
    </Container>
  )
}

export default EditProfile

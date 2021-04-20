import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import PolyConnect from "../../components/polyconnect"
import UploadToPoly from "../../components/upload-to-poly"
import UserSelfAssets from "../../components/user-self-assets"
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
      <Tabs defaultActiveKey="manage" id="uncontrolled-tab-example">
        <Tab eventKey="manage" title="Manage Uploads">
          <Row>
            <Col>
              <h2>Manage Uploads</h2>
              <UserSelfAssets />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <Row>
            <Col>
              <h2>Upload New</h2>
              <UploadToPoly />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="settings" title="Settings">
          <Row>
            <Col>
              <h2>Connect with Google Poly</h2>
              <p>Note: This functionality will be unavailble from June 30th 2021</p>
              <PolyConnect />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default EditProfile

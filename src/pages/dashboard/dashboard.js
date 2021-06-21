import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import PolyConnect from "../../components/dashboard/polyconnect"
import UploadFile from "../../components/dashboard/upload-file"
import MySketches from "../../components/dashboard/my-sketches"
import MyDetails from "../../components/dashboard/my-details"
import "./dashboard.scss"

function Dashboard(props) {
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
          <h2>Manage Uploads</h2>
          <hr />
          <Row>
            <Col>
              <MySketches />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <h2>Upload New File</h2>
          <hr />
          <Row>
            <Col>
              <UploadFile />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="settings" title="Settings">
          <h2>User Details</h2>
          <hr />
          <Row>
            <Col>
              <MyDetails />
              <hr />
            </Col>
            <Col>
              <h2>Connect with Google Poly</h2>
              <p className="error">
                Note: This functionality will be unavailble from <strong>June 30th 2021</strong>
              </p>
              <p>
                <strong>
                  Google Poly uses internal model urls that have extra user data to display extra data like scene
                  backgrounds, key lights etc. This data is not exposed by the Poly API and so we cannot import it.
                </strong>
              </p>
              <PolyConnect />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Dashboard

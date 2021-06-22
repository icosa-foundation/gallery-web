import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import UploadFile from "../../components/user/upload-file"
import MySketches from "../../components/user/my-sketches"

import "./uploads.scss"

function Uploads(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>My Uploads</h1>
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
      </Tabs>
    </Container>
  )
}

export default Uploads

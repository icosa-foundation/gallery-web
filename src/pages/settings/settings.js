import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import MyDetails from "../../components/settings/my-details"
import PolyConnect from "../../components/settings/polyconnect"

import "./settings.scss"

function Settings(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>My Settings</h1>
          <hr />
        </Col>
      </Row>
      <Tabs defaultActiveKey="usersettings" id="uncontrolled-tab-example">
        <Tab eventKey="usersettings" title="User Settings">
          <h2>User Settings</h2>
          <hr />
          <Row>
            <Col>
              <MyDetails />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="polyconnect" title="Connect to Poly">
          <h2>Connect to Poly</h2>
          <hr />
          <p className="error">
            Note: This functionality will be unavailble from <strong>June 30th 2021</strong>
          </p>
          <p>
            <strong>
              Google Poly uses internal model urls that have extra user data to display extra data like scene
              backgrounds, key lights etc. This data is not exposed by the Poly API and so we cannot import it.
            </strong>
          </p>
          <Row>
            <Col>
              <PolyConnect />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Settings

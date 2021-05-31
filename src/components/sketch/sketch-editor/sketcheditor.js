import React from "react"
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Details from "./tabs/details"
import "./sketcheditor.scss"

const TabTitle = (props) => {
  return <FontAwesomeIcon icon={props.icon} />
}

const SketchEditor = (props) => {
  const { handleSubmit } = props
  return (
    <Container className="sketcheditor">
      <Row className="update-button">
        <Col>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </Col>
      </Row>
      <Tabs defaultActiveKey="details">
        <Tab eventKey="details" title={<TabTitle icon="edit" />}>
          <h2>Details</h2>
          <Details {...props} />
        </Tab>
        <Tab eventKey="model" title={<TabTitle icon="shapes" />} disabled>
          <h2>Shapes</h2>
        </Tab>
        <Tab eventKey="materials" title={<TabTitle icon="fill-drip" />} disabled>
          <h2>Materials</h2>
        </Tab>
        <Tab eventKey="lighting" title={<TabTitle icon="lightbulb" />} disabled>
          <h2>Lighting</h2>
        </Tab>
        <Tab eventKey="post-processing" title={<TabTitle icon="camera-retro" />} disabled>
          <h2>Post Processing</h2>
        </Tab>
        <Tab eventKey="experimental" title={<TabTitle icon="vial" />} disabled>
          <h2>Experimental</h2>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default SketchEditor

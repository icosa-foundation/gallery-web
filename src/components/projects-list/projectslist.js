import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectBox from "./projectbox"
import "./projectslist.scss"

const ProjectsList = (props) => {
  const { content } = props
  return (
    <div className="projects-list">
      <Container>
        <Row>
          {content.map((project, key) => {
            console.log(project)
            return (
              <Col md={3} xs={6}>
                <ProjectBox project={project} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProjectsList

import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./mysketches.scss"

const MySketches = (props) => {
  const { content } = props
  return (
    <div className="my-sketches">
      <Container>
        <Row>
          {content &&
            content.map((sketch, key) => {
              return (
                <Col md={3} xs={6} key={key}>
                  <h3>{sketch.name}</h3>
                  <span>{sketch.description}</span>
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default MySketches

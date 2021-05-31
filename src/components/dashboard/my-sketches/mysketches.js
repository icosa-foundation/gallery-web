import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import MySketchBox from "./mysketchbox"
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
                <Col xs={3}>
                  <MySketchBox key={key} sketch={sketch} />
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default MySketches

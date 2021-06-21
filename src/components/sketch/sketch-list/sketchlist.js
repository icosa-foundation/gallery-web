import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SketchBox from "./sketchbox"
import Loader from "../../ui/loader"
import "./sketchlist.scss"

const SketchList = (props) => {
  const { content, isPoly, loading } = props
  return (
    <div className="sketch-list">
      <Container>
        <Row>
          {content &&
            content.map((sketch, key) => {
              return (
                <Col md={3} xs={12} key={key}>
                  <SketchBox sketch={sketch} isPoly={isPoly} />
                </Col>
              )
            })}
        </Row>
        {loading ? (
          <Row>
            <Loader />
          </Row>
        ) : (
          ""
        )}
      </Container>
    </div>
  )
}

export default SketchList

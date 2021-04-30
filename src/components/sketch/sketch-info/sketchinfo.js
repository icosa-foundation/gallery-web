import moment from "moment"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Loader from "../../ui/loader"
import "./sketchinfo.scss"

const SketchInfo = (props) => {
  const { info } = props
  if (!info) {
    return <Loader />
  }
  return (
    <Container className="sketch-info">
      <Row>
        <Col>
          {info && (
            <div>
              <h2>{info.displayName}</h2>
              <h4>{info.authorName}</h4>
              <span>{moment(info.createTime).format("YYYY-MM-DD")}</span>
              <p>{info.description}</p>
              <h6>{info.license}</h6>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default SketchInfo
import moment from "moment"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Loader from "../../ui/loader"
import "./sketchinfo.scss"
import { GetSnowflakeTimestamp } from "../../../helpers"

const SketchInfo = (props) => {
  const { info, isPoly } = props
  if (!info) {
    return <Loader />
  }
  const displayName = isPoly ? info.displayName : info.name
  const authorName = isPoly ? info.authorName : info.ownername
  const timestamp = isPoly ? moment(info.createTime).format("YYYY-MM-DD") : GetSnowflakeTimestamp(info.id).format("YYYY-MM-DD")
  const license = isPoly ? info.license : "All Rights Reserved"
  const authorPage = isPoly ? "" : `/user/${info.ownerurl}`
  return (
    <Container className="sketch-info">
      <Row>
        <Col>
          {info && (
            <div>
              <h2>{displayName}</h2>
              {isPoly ? <h4>{authorName}</h4> : <h4><a href={authorPage}>{authorName}</a></h4>}
              <span>{timestamp}</span>
              <p>{info.description}</p>
              <h6>{license}</h6>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default SketchInfo

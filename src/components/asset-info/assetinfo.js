import moment from "moment"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./assetinfo.scss"

const AssetInfo = (props) => {
  const { info } = props
  return (
    <Container className="asset-info">
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

export default AssetInfo

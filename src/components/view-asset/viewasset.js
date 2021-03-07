import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./viewasset.scss"

const ViewAsset = (props) => {
  const { viewerReference } = props

  return (
    <div className="viewasset">
      <div ref={viewerReference}></div>
    </div>
  )
}

export default ViewAsset

import React from "react"
import "./polyconnect.scss"
import {Row, Col, Button } from "react-bootstrap"
import PolyAssetsAPI from "../../../api/poly/assets"
import nothumbnail from "../../sketch/sketch-list/nothumbnail.png"
import { connect } from "formik"

class PolyAsset extends React.Component {

  beginImport = async () => {
    const uploadData = await PolyAssetsAPI.importAssets([this.props.sketch.id], this.props.user)
  }
  
  render() {
    return (
      <Row className="polysketch" key={this.props.sketch.id}>
      <Col>
        <img alt={this.props.sketch.displayName} src={this.props.sketch.thumbnail?.url ? this.props.sketch.thumbnail?.url : nothumbnail} />
      </Col>
      <Col>
        <h3>{this.props.sketch.displayName}</h3>
      </Col>
      <Col>{this.props.sketch.updateTime}</Col>
      <Col>{this.props.sketch.visibility}</Col>
      <Col>{this.props.sketch.license}</Col>
      <Col>
        <Button onClick={this.beginImport}>IMPORT</Button>
      </Col>
    </Row>      
    )
  }
}
export default PolyAsset

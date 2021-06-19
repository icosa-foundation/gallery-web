import React from "react"
import "./polyconnect.scss"
import {Row, Col, Button } from "react-bootstrap"
import PolyAssetsAPI from "../../../api/poly/assets"
import nothumbnail from "../../sketch/sketch-list/nothumbnail.png"
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

class PolyAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imported: false, status:"Import"}
  }

  beginImport = async () => {
    const id = this.props.sketch.name.split("/")[1];
    const uploadData = await PolyAssetsAPI.importAssets([id], this.props.user)
      this.setState({imported: true, status: uploadData.failedassets.length > 0 ? uploadData.failedassets[0].reason : "Imported"})
  }
  
  render() {
    return (
      <Row className="polysketch" key={this.props.sketch.name}>
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
        {this.state.imported ? <Button>{this.state.status}</Button> : <Button onClick={this.beginImport}>{this.state.status}</Button>}
      </Col>
    </Row>      
    )
  }
}
export default connect(mapStateToProps)(PolyAsset)

import React from "react"
import "./uploadfile.scss"
import { Container, Row, Col, Alert, Form } from "react-bootstrap"
import Loader from "../../ui/loader"

const UploadToPoly = (props) => {
  const { onFileUpload, loading, error, success } = props
  return (
    <Container className="uploadtopoly">
      <Row>
        {error.length > 0 && (
          <Alert variant="danger">
            <span>Error: {error}</span>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <span>File Successfully Uploaded</span>
          </Alert>
        )}
        <Col xs={6}> {loading ? <Loader /> : <Form.File onChange={onFileUpload} multiple={true} />}</Col>
      </Row>
    </Container>
  )
}

export default UploadToPoly

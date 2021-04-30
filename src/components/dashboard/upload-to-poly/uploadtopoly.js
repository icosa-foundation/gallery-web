import React from "react"
import "./uploadtopoly.scss"
import { Alert, Form } from "react-bootstrap"
import Loader from "../..//ui/loader"

const UploadToPoly = (props) => {
  const { onFileUpload, loading, error, success } = props
  return (
    <div className="uploadtopoly">
      {error.length > 0 ? (
        <Alert variant="danger">
          <span>Error: {error}</span>
        </Alert>
      ) : (
        ""
      )}
      {success ? (
        <div className="success">
          <span>File Successfully uploaded!</span>
        </div>
      ) : (
        ""
      )}
      <div> {loading ? <Loader /> : <Form.File onChange={onFileUpload} />}</div>
    </div>
  )
}

export default UploadToPoly

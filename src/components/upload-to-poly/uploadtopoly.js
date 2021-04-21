import React from "react"
import "./uploadtopoly.scss"

const UploadToPoly = (props) => {
  const { onFileUpload, loading, error, success } = props
  return (
    <div className="uploadtopoly">
      {error.length > 0 ? (
        <div className="error">
          <span>Error: {error}</span>
        </div>
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
      <div> {loading ? <span>Loading...</span> : <input type="file" name="Upload" onChange={onFileUpload} />}</div>
    </div>
  )
}

export default UploadToPoly

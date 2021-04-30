import React from "react"
import "./sketchviewer.scss"

const SketchViewer = (props) => {
  const { viewerReference } = props

  return (
    <div className="sketchviewer">
      <div ref={viewerReference}></div>
    </div>
  )
}

export default SketchViewer

import React from "react"
import moment from "moment"
import nothumbnail from "./nothumbnail.png"

const SketchBox = (props) => {
  const { sketch, isPoly } = props
  const sketchURL = (isPoly ? "/poly" : "") + "/view/" + sketch.name.replace("assets/", "")
  const thumbnail = sketch.thumbnail.url ? `url(${sketch.thumbnail.url})` : `url(${nothumbnail})`
  return (
    <div className="sketchbox">
      <a href={sketchURL}>
        <div
          className="sketchimage"
          style={{
            backgroundImage: thumbnail,
          }}
        >
          <div className="title">
            <h6>{sketch.displayName}</h6>
          </div>
        </div>
      </a>
      <div className="sketchinfo">
        <div className="author">{sketch.authorName}</div>
        <div className="date">{moment(sketch.createTime).format("YYYY-MM-DD")}</div>
      </div>
    </div>
  )
}

export default SketchBox

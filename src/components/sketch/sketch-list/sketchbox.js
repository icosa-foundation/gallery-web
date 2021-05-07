import React from "react"
import moment from "moment"
import nothumbnail from "./nothumbnail.png"
import { GetSnowflakeTimestamp } from "../../../helpers"

const SketchBox = (props) => {
  const { sketch } = props

  const isPoly = sketch.displayName ? true : false
  const sketchURL = (isPoly ? "/poly" : "") + "/view/" + (isPoly ? sketch.name.replace("assets/", "") : `${sketch.ownerurl}/${sketch.url}`)
  const thumbnail = isPoly ? (sketch.thumbnail.url ? `url(${sketch.thumbnail.url})` : `url(${nothumbnail})`) : (sketch.thumbnail ? `url(${sketch.thumbnail})` : `url(${nothumbnail})`)
  const name = isPoly ? sketch.displayName : sketch.name
  const owner = isPoly ? sketch.authorName : sketch.ownername
  const timestamp = isPoly ? moment(sketch.createTime).format("YYYY-MM-DD") : GetSnowflakeTimestamp(sketch.id).format("YYYY-MM-DD")
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
            <h6>{name}</h6>
          </div>
        </div>
      </a>
      <div className="sketchinfo">
        <div className="author">{owner}</div>
        <div className="date">{timestamp}</div>
      </div>
    </div>
  )
}

export default SketchBox

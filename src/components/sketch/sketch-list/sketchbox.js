import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import nothumbnail from "./nothumbnail.png"
import { GetSnowflakeTimestamp } from "../../../helpers"

const SketchBox = (props) => {
  const { sketch } = props

  const isPoly = sketch.ID ? true : false
  const sketchURL = (isPoly ? "/poly" : "") + "/view/" + (isPoly ? sketch.ID : `${sketch.ownerurl}/${sketch.url}`)
  const thumbnail = isPoly ? (sketch.Thumbnail ? `url(${sketch.Thumbnail})` : `url(${nothumbnail})`) : (sketch.thumbnail ? `url(${sketch.thumbnail})` : `url(${nothumbnail})`)
  const name = isPoly ? sketch.Title : sketch.name
  const owner = isPoly ? sketch.Creator.Username : sketch.ownername
  const timestamp = isPoly ? moment(sketch.Uploaded).format("YYYY-MM-DD") : GetSnowflakeTimestamp(sketch.id).format("YYYY-MM-DD")
  return (
    <div className="sketchbox">
      <Link to={sketchURL}>
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
      </Link>
      <div className="sketchinfo">
        <div className="author">{owner}</div>
        <div className="date">{timestamp}</div>
      </div>
    </div>
  )
}

export default SketchBox

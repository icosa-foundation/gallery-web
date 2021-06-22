import nothumbnail from "./nothumbnail.png"
import { GetSnowflakeTimestamp } from "../../../helpers"

const SketchBox = (props) => {
  const { sketch } = props
  const sketchURL = `/edit/${sketch.ownerurl}/${sketch.url}`
  const thumbnail = sketch.thumbnail ? `url(${sketch.thumbnail})` : `url(${nothumbnail})`
  const name = sketch.name
  const timestamp = GetSnowflakeTimestamp(sketch.id).format("YYYY-MM-DD")
  return (
    <div className="my-sketchbox">
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
        <div className="date">{timestamp}</div>
      </div>
    </div>
  )
}

export default SketchBox

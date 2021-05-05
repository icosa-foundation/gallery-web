import React from "react"
import SketchList from "../../sketch/sketch-list"
import "./userinfo.scss"

const UserInfo = (props) => {
  const { displayname, description, url } = props.info
  return (
    <div>
      <h2>{displayname}</h2>
      <p>{description}</p>
      {url ? <SketchList userId={url} /> : ""}
    </div>
  )
}

export default UserInfo

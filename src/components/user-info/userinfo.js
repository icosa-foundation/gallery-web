import React from "react"
import "./userinfo.scss"

const ViewAsset = (props) => {
  const { displayname, description } = props.info

  return (
    <div>
      <h2>{displayname}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ViewAsset

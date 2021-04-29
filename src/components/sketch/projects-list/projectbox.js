import React from "react"
import moment from "moment"
import noasset from "./noasset.png"

const ProjectBox = (props) => {
  const { project, isPoly } = props
  const projectURL = (isPoly ? "/poly" : "") + "/view/" + project.name.replace("assets/", "")
  const thumbnail = project.thumbnail.url ? `url(${project.thumbnail.url})` : `url(${noasset})`
  return (
    <div className="projectbox">
      <a href={projectURL}>
        <div
          className="projectimage"
          style={{
            backgroundImage: thumbnail,
          }}
        >
          <div className="title">
            <h6>{project.displayName}</h6>
          </div>
        </div>
      </a>
      <div className="projectinfo">
        <div className="author">{project.authorName}</div>
        <div className="date">{moment(project.createTime).format("YYYY-MM-DD")}</div>
      </div>
    </div>
  )
}

export default ProjectBox

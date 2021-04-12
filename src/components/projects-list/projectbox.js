import React from "react"
import moment from "moment"

const ProjectBox = (props) => {
  const { project } = props
  const projectURL = "/view/" + project.name.replace("assets/", "")
  return (
    <div className="projectbox">
      <a href={projectURL}>
        <div
          className="projectimage"
          style={{
            backgroundImage: `url(${project.thumbnail.url})`,
          }}
        >
          <div className="title">
            <h6>{project.displayName}</h6>
          </div>
        </div>
      </a>
      <div className="projectinfo">
        <div className="author">{project.authorName}</div>
        <div className="date">
          {moment(project.createTime).format("YYYY-MM-DD")}
        </div>
      </div>
    </div>
  )
}

export default ProjectBox

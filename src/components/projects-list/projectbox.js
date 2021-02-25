import React from "react"

const ProjectBox = (props) => {
  const { project } = props
  console.log("url('" + project.image_url + "');")
  return (
    <div className="projectbox">
      <a href="#">
        <div
          className="projectimage"
          style={{
            backgroundImage: `url(${project.image_url})`,
          }}
        >
          <div className="title">
            <h6>{project.title}</h6>
          </div>
        </div>
      </a>
      <div className="projectinfo">
        <div className="author">{project.author}</div>
        <div className="date">{project.datetime}</div>
      </div>
    </div>
  )
}

export default ProjectBox

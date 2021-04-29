import React from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import moment from "moment"
import "./homehero.scss"

const HomeHero = (props) => {
  const { content } = props
  return (
    <div className="home-hero">
      <Carousel>
        {content.map((content, key) => {
          return (
            <Carousel.Item key={key}>
              <img className="d" src={content.thumbnail.url} alt={content.displayName + " by " + content.authorName} />
              <Carousel.Caption>
                <Link to={"/poly/view/" + content.name.replace("assets/", "")}>
                  <h3 className="title">{content.displayName}</h3>
                </Link>
                <p>
                  {content.authorName} | {moment(content.createTime).format("YYYY-MM-DD")}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default HomeHero

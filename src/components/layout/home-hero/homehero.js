import React from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import moment from "moment"
import "./homehero.scss"
import { GetSnowflakeTimestamp } from "../../../helpers"

const HomeHero = (props) => {
  const { content } = props
  return (
    <div className="home-hero">
      <Carousel>
        {content.map((content, key) => {
          return (
            <Carousel.Item key={key}>
              <img className="d" src={content.thumbnail} alt={content.name + " by " + content.ownername} />
              <Carousel.Caption>
                <Link to={"/view/" + content.ownerurl + "/" + content.url}>
                  <h3 className="title">{content.name}</h3>
                </Link>
                <p>
                  {content.ownername} | {GetSnowflakeTimestamp(content.id).format("YYYY-MM-DD")}
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

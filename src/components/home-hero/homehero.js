import React from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import moment from "moment"
import "./homehero.scss"

const HomeHero = (props) => {
  const { content } = props
  return (
    <div className="home-hero">
      <Carousel>
        {content.map((content, key) => {
          return (
            <Carousel.Item>
              <img className="d" src={content.thumbnail.url} alt={content.displayName + " by " + content.authorName} />
              <Carousel.Caption>
                <h3 className="title">{content.displayName}</h3>
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

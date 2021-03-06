import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"
import moment from "moment"
import "./homehero.scss"

const HomeHero = (props) => {
  const { content } = props
  return (
    <div className="home-hero">
      <HeroSlider
        orientation="horizontal"
        initialSlide={1}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
          height: "",
        }}
      >
        <OverlayContainer className="overlay">
          <Container>
            <Row>
              <Col>
                <h2>A Virtual Reality Art Portal</h2>
              </Col>
            </Row>
          </Container>
        </OverlayContainer>

        {content.map((content, key) => {
          return (
            <Slide
              navDescription={content.title}
              background={{
                backgroundImage: content.thumbnail.url,
                backgroundAnimation: "zoom",
              }}
              className="slide"
            >
              <Container>
                <Row>
                  <Col>
                    <div className="projectinfo">
                      <div className="title">{content.displayName}</div>
                      <div>
                        <div className="author">{content.authorName}</div>|
                        <div className="date">{moment(content.createTime).format('YYYY-MM-DD')}</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Slide>
          )
        })}
        <Nav />
      </HeroSlider>
    </div>
  )
}

export default HomeHero

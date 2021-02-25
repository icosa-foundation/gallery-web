import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"
import "./homehero.scss"

const HomeHero = (props) => {
  const { content } = props
  console.log("Change Autoplay to on")
  return (
    <div className="home-hero">
      <HeroSlider
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
          height: "30vh",
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
                backgroundImage: content.image_url,
                backgroundAnimation: "zoom",
              }}
              className="slide"
            >
              <Container>
                <Row>
                  <Col>
                    <div className="projectinfo">
                      <div className="title">{content.title}</div>
                      <div>
                        <div className="author">{content.author}</div>|
                        <div className="date">{content.datetime}</div>
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

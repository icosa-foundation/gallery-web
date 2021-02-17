import { Container, Row, Col } from "react-bootstrap"
import HomeHero from "../../components/home-hero"
import "./homepage.scss"

function Homepage() {
  return (
    <div>
      <HomeHero />
      <Container>
        <Row>
          <Col>Test</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage

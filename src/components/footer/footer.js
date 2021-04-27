import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./footer.scss"

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>&copy; 2020-{new Date().getFullYear()} Icosa Gallery</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

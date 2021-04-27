import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./footer.scss"

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>&copy; 2021 Icosa Gallery</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

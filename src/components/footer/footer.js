import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./footer.scss"

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>&copy; 2020 Icosa</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"
import logo from "./logo.png"
import "./header.scss"

const WelcomeMessage = (props) => {
  const { isLoggedIn, username } = props
  if (isLoggedIn) {
    return <div>Welcome, {username}</div>
  } else {
    return ""
  }
}

const Header = (props) => {
  const {} = props
  return (
    <header>
      <Container>
        <Row>
          <Col></Col>
          <Col className="text-center">
            <Link className="logo" to="/">
              <img alt="logo" src={logo} />
            </Link>
          </Col>
          <Col className="text-right">User Profile</Col>
        </Row>
      </Container>
    </header>
  )
}

export default withRouter(Header)

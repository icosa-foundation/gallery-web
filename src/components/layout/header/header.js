import React from "react"
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"
import logo from "./logo.png"
import "./header.scss"

const WelcomeMessage = (props) => {
  const { isLoggedIn, username } = props
  if (isLoggedIn) {
    return (
      <div>
        Welcome, <a href="/dashboard">{username}</a>
      </div>
    )
  } else {
    return (
      <div>
        <a href="/login">Login / Register</a>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <OverlayTrigger
              placement="auto"
              overlay={
                <Tooltip>Icosa is currently in Beta, please be aware not all features may be implemented</Tooltip>
              }
            >
              <span className="beta">BETA</span>
            </OverlayTrigger>
          </Col>
          <Col className="text-center">
            <Link className="logo" to="/">
              <img alt="logo" src={logo} />
            </Link>
          </Col>
          <Col className="text-right">
            <WelcomeMessage {...props} />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default withRouter(Header)

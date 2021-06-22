import React from "react"
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "./logo.png"
import "./header.scss"

const WelcomeMessage = (props) => {
  const { isLoggedIn, username, userurl } = props
  if (isLoggedIn) {
    return (
      <div>
        Welcome, <a href={`${userurl}`}>{username}</a>
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
  const { toggleNav } = props
  return (
    <header>
      <Container>
        <Row>
          <Col className="d-block d-md-none text-center">
            <h3>
              <FontAwesomeIcon className="toggleicon" icon="bars" onClick={toggleNav} />
            </h3>
          </Col>
          <Col className="d-none d-md-block">
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

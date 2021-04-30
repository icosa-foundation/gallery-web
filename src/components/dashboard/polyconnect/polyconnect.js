import React from "react"
import "./polyconnect.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import { GoogleLogin, GoogleLogout } from "react-google-login"

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const PolyList = (props) => {
  const { polySketches } = props
  return (
    <Container className="polysketcheslist">
      <Row>
        <Col>
          <Button className="importall">IMPORT ALL</Button>
        </Col>
      </Row>
      {polySketches.map((o, id) => {
        const sketch = o.asset
        return (
          <Row className="polysketch" key={id}>
            <Col>
              <img alt={sketch.displayName} src={sketch.thumbnail.url} />
            </Col>
            <Col>
              <h3>{sketch.displayName}</h3>
            </Col>
            <Col>{sketch.updateTime}</Col>
            <Col>{sketch.visibility}</Col>
            <Col>{sketch.license}</Col>
            <Col>
              <Button>IMPORT</Button>
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}

const PolyConnect = (props) => {
  const { loggedIn, onLogin, onLogout, onError, email, polySketches } = props
  return (
    <Container>
      <Row>
        <Col>
          {loggedIn ? (
            <div>
              <p>Logged in as {email}</p>
              <GoogleLogout clientId={googleClientId} buttonText="Logout" onLogoutSuccess={onLogout} />
              {polySketches ? <PolyList polySketches={polySketches} /> : ""}
            </div>
          ) : (
            <GoogleLogin
              clientId={googleClientId}
              buttonText="Login"
              onSuccess={onLogin}
              onFailure={onError}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PolyConnect

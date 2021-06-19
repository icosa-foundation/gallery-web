import React from "react"
import "./polyconnect.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import { GoogleLogin, GoogleLogout } from "react-google-login"
import PolyAsset from "./polyasset"

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const PolyList = (props) => {
  const { polySketches, user } = props
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
          <PolyAsset key={id}
            sketch={sketch}
            user={user}
          />
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
              scope={"https://www.googleapis.com/auth/vrassetdata.readonly"}
            />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PolyConnect

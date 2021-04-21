import React from "react"
import "./polyconnect.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import { GoogleLogin, GoogleLogout } from "react-google-login"

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const PolyList = (props) => {
  const { polyAssets } = props
  return (
    <Container className="polyassetslist">
      <Row>
        <Col>
          <Button className="importall">IMPORT ALL</Button>
        </Col>
      </Row>
      {polyAssets.map((o, id) => {
        const asset = o.asset
        return (
          <Row className="polyasset" key={id}>
            <Col>
              <img alt={asset.displayName} src={asset.thumbnail.url} />
            </Col>
            <Col>
              <h3>{asset.displayName}</h3>
            </Col>
            <Col>{asset.updateTime}</Col>
            <Col>{asset.visibility}</Col>
            <Col>{asset.license}</Col>
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
  const { loggedIn, onLogin, onLogout, onError, email, polyAssets } = props
  return (
    <Container>
      <Row>
        <Col>
          {loggedIn ? (
            <div>
              <p>Logged in as {email}</p>
              <GoogleLogout clientId={googleClientId} buttonText="Logout" onLogoutSuccess={onLogout} />
              {polyAssets ? <PolyList polyAssets={polyAssets} /> : ""}
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

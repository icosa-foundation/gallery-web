import React from "react"
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap"
import "./style.scss"

const Register = (props) => {
  const {
    handleSubmit,
    changeUsername,
    changeDisplayname,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    changeTacAgree,
    error,
  } = props
  return (
    <Container className="register-container">
      <Row className="register-form">
        <Col md={{ span: 8, offset: 2 }} xs={12}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            inline
            onSubmit={(e) => {
              e.preventDefault()
              return false
            }}
          >
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" onChange={changeUsername} placeholder="Username" autoComplete="username" />
            </Form.Group>
            <br />
            <Form.Group controlId="displayname">
              <Form.Label>Display Name:</Form.Label>
              <Form.Control type="text" onChange={changeDisplayname} placeholder="Display Name" autoComplete="displayname" />
            </Form.Group>
            <br />
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" onChange={changeEmail} placeholder="Email" autoComplete="email" />
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={changePassword}
                placeholder="Password"
                autoComplete="new-password"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={changeConfirmPassword}
                placeholder="Confirm Password"
                autoComplete="new-password"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="tacagree" className="tacscontainer">
              <Form.Check type="checkbox" onClick={changeTacAgree} />
              <Form.Label className="terms">
                <span>
                  I agree to the{" "}
                  <a href="/terms" target="_blank">
                    Terms and Conditions
                  </a>
                </span>
              </Form.Label>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register

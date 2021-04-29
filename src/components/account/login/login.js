import React from "react"
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap"
import "./style.scss"

const submitOnEnter = (toSubmit) => {
  const handler = (event) => {
    if (event.key === "Enter") {
      toSubmit()
    }
  }
  return handler
}

const Login = (props) => {
  const { handleSubmit, changeUsername, changePassword, error } = props
  return (
    <Container className="login-container">
      <Row className="login-form">
        <Col md={{ span: 8, offset: 2 }} xs={12}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              return false
            }}
          >
            <label htmlFor="username">Username:</label>
            <Form.Control
              type="text"
              onChange={changeUsername}
              placeholder="Username"
              name="username"
              autoComplete="username"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <Form.Control
              type="password"
              onChange={changePassword}
              placeholder="Password"
              name="password"
              onKeyUp={submitOnEnter(handleSubmit)}
              autoComplete="current-password"
            />
            <br />
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Log in
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

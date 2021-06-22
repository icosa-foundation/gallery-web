import React from "react"
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap"
import "./style.scss"

const ResetPassword = (props) => {
  const { handleSubmit, changeEmail, success, error } = props
  return (
    <Container className="login-container">
      <Row className="login-form">
        <Col md={{ span: 8, offset: 2 }} xs={12}>
          {success && <Alert variant="success">Password Reset Email sent!</Alert>}
          {error && <Alert variant="error">{error}</Alert>}
          <Form
            inline
            onSubmit={(e) => {
              e.preventDefault()
              return false
            }}
          >
            <Form.Group controlId="username">
              <Form.Label srOnly>Email:</Form.Label>
              <Form.Control type="text" onChange={changeEmail} placeholder="E-mail" autoComplete="username" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword

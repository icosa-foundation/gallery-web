import React from "react"
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap"
import "./style.scss"


const NewPassword = (props) => {
  const { handleSubmit, changePassword, changeConfirmPassword, success, error } = props
  return (
    <Container className="login-container">
      <Row className="login-form">
        <Col md={{ span: 8, offset: 2 }} xs={12}>
          {success && <Alert variant="success">Password successfully reset!</Alert>}
          {error && <Alert variant="error">{error}</Alert>}
          <Form
            inline
            onSubmit={(e) => {
              e.preventDefault()
              return false
            }}
          >
            <Form.Group controlId="password">
              <Form.Label srOnly>Password</Form.Label>
              <Form.Control type="password" onChange={changePassword} placeholder="New Password" autoComplete="password" />
            </Form.Group>
            <br />
            <Form.Group controlId="confirmPassword">
              <Form.Label srOnly>ConfirmPassword</Form.Label>
              <Form.Control type="password" onChange={changeConfirmPassword} placeholder="Confirm Password" autoComplete="password" />
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

export default NewPassword

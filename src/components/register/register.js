import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./style.scss"

const Register = (props) => {
  const {
    handleSubmit,
    changeUsername,
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
          {error && <p className="error">{error}</p>}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            onChange={changeUsername}
            placeholder="Username"
            name="username"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            onChange={changeEmail}
            placeholder="Email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={changePassword}
            placeholder="Password"
            name="password"
          />
          <br />
          <label htmlFor="passwordconfirm">Confirm Password:</label>
          <input
            type="password"
            onChange={changeConfirmPassword}
            placeholder="Confirm Password"
            name="passwordconfirm"
          />
          <br />
          <label htmlFor="tacagree">Agree to the Terms and Conditions:</label>
          <input
            type="checkbox"
            onClick={changeTacAgree}
            placeholder="Confirm Password"
            name="tacagree"
            id="tacagree"
          />
          <label htmlFor="tacagree" className="terms">
            I agree to the{" "}
            <a href="/terms" target="_blank">
              Terms and Conditions
            </a>
          </label>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default Register

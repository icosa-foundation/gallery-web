import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./mydetails.scss"

const UpdatePassword = (props) => {
  return (
    <div>
      <h4>Password</h4>
      <Row>
        <Col xs="12">
          <label htmlFor="oldpassword">Old Password</label>
          <input type="password" name="oldpassword" />
        </Col>
        <Col xs="12">
          <label htmlFor="newpassword">New Password</label>
          <input type="password" name="newpassword" />
        </Col>
      </Row>
    </div>
  )
}

const UpdateUsername = (props) => {
  return (
    <div>
      <h4>Username</h4>
      <Row>
        <Col xs="12">
          <label htmlFor="newusername">New Username</label>
          <input type="text" name="newusername" />
        </Col>
      </Row>
    </div>
  )
}

const UpdateEmail = (props) => {
  return (
    <div>
      <h4>Email</h4>
      <Row>
        <Col xs="12">
          <label htmlFor="newemail">New Email</label>
          <input type="email" name="newemail" />
        </Col>
        <Col xs="12">
          <label htmlFor="newemailconfirm">Confirm Email</label>
          <input type="email" name="newemailconfirm" />
        </Col>
      </Row>
    </div>
  )
}
const MyDetails = (props) => {
  return (
    <div className="my-details">
      <UpdateUsername />
      <UpdateEmail />
      <UpdatePassword />
    </div>
  )
}

export default MyDetails

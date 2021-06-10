import React from "react"
import { Form, Button } from "react-bootstrap"
import "./mydetails.scss"

const UpdatePassword = (props) => {
  return (
    <div>
      <h4>Password</h4>
      <Form.Group controlId="newpassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>

      <Form.Group controlId="newpasswordconfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>
    </div>
  )
}

const UpdateUsername = (props) => {
  return (
    <div>
      <h4>Username</h4>
      <Form.Group controlId="newusername">
        <Form.Label>New Username</Form.Label>
        <Form.Control type="text" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>
    </div>
  )
}

const UpdateDescription = (props) => {
  return (
    <div>
      <h4>Description</h4>
      <Form.Group controlId="newdescription">
        <Form.Label>New Description</Form.Label>
        <Form.Control as="textarea" type="text" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>
    </div>
  )
}

const UpdateUrl = (props) => {
  return (
    <div>
      <h4>URL</h4>
      <Form.Group controlId="newurl">
        <Form.Label>New URL</Form.Label>
        <Form.Control type="text" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>
    </div>
  )
}

const UpdateEmail = (props) => {
  return (
    <div>
      <h4>Email</h4>
      <Form.Group controlId="newemail">
        <Form.Label>New Email</Form.Label>
        <Form.Control type="email" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>

      <Form.Group controlId="newemailconfirm">
        <Form.Label>Confirm Email</Form.Label>
        <Form.Control type="email" />
        {/* TODO: Add AutoComplete */}
      </Form.Group>
    </div>
  )
}
const MyDetails = (props) => {
  return (
    <Form className="my-details text-center">
      <UpdateUsername />
      <UpdateUrl />
      <UpdateDescription />
      <hr />
      <UpdateEmail />
      <UpdatePassword />
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  )
}

export default MyDetails

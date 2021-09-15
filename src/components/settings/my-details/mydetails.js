import React from "react"
import { Formik, Form, Field } from "formik"
import { Container, Row, Col, Alert, Button } from "react-bootstrap"
import Loader from "../../ui/loader"
import "./mydetails.scss"

const UpdateUsername = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <h4>Username / URL</h4>
      </Col>
      <Col xs={12}>
        <label htmlFor="username">New Username/ URL</label>
        <Field name="username" type="text" />
      </Col>
    </Row>
  )
}

const UpdateDisplayName = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <h4>Display Name</h4>
      </Col>
      <Col xs={12}>
        <label htmlFor="displayname">New Display Name</label>
        <Field name="displayname" type="text" />
      </Col>
    </Row>
  )
}

const UpdateDescription = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <h4>Description</h4>
      </Col>
      <Col xs={12}>
        <label htmlFor="description">New Description</label>
        <Field name="description" as="textarea" type="text" />
      </Col>
    </Row>
  )
}

const UpdateEmail = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <h4>Email</h4>
      </Col>
      <Col xs={12}>
        <label htmlFor="email">New Email</label>
        <Field name="email" type="email" />
      </Col>
      <Col xs={12}>
        <label htmlFor="emailconfirm">Confirm Email</label>
        <Field name="emailconfirm" type="email" />
      </Col>
    </Row>
  )
}

const UpdatePassword = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <h4>Password</h4>
      </Col>
      <Col xs={12}>
        <label htmlFor="password">New Password</label>
        <Field name="password" type="password" />
      </Col>
      <Col xs={12}>
        <label htmlFor="passwordconfirm">Confirm Password</label>
        <Field name="passwordconfirm" type="password" />
      </Col>
    </Row>
  )
}

const MyDetails = (props) => {
  const { handleSubmit, user, error } = props
  if (!user) {
    return <Loader />
  }
  return (
    <Formik
      initialValues={{
        username: user.url,
        displayname: user.displayname,
        description: user.description,
        email: user.email,
        emailconfirm: "",
        password: "",
        passwordconfirm: "",
        currentpassword: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="my-details text-center">
          {error && <Alert variant="danger">{error}</Alert>}
          <Container>
            <UpdateUsername />
            <UpdateDisplayName />
            <UpdateDescription />
            <hr />
            <UpdateEmail />
            <UpdatePassword />
            <hr />
            <Row>
              <Col xs={12}>
                <h3>Current Password</h3>
              </Col>
              <Col xs={12}>
                <Field name="currentpassword" type="password" />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

export default MyDetails

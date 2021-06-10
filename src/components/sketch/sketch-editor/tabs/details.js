import { Container, Row, Col } from "react-bootstrap"
import { Field } from "formik"

const Details = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <label htmlFor="description">Description</label>
          <Field name="description" as="textarea" rows={3} type="text" />
          <label htmlFor="visibliity">Visibilty</label>
          <Field name="visiblity" as="select">
            <option value="visible">Published</option>
            <option value="private">Unpublished</option>
          </Field>
        </Col>
      </Row>
    </Container>
  )
}

export default Details

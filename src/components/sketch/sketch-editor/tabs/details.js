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
          <label htmlFor="visibility">Visibility</label>
          <Field name="visibility" as="select">
            <option value="PUBLIC">Published</option>
            <option value="UNLISTED">Unlisted</option>
            <option value="PRIVATE">Private</option>
          </Field>
        </Col>
      </Row>
    </Container>
  )
}

export default Details

import { Container, Row, Form } from "react-bootstrap"

const Details = (props) => {
  const { asset, changeTitle, changeDescription, changeVisiblity } = props
  return (
    <Container>
      <Row>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            return false
          }}
        >
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={changeTitle} placeholder="My Sketch" value={asset.name} />
          </Form.Group>
          <br />
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              onChange={changeDescription}
              placeholder=""
              value={asset.description}
            />
          </Form.Group>
          <Form.Group controlId="visibility">
            <Form.Label>Visibilty</Form.Label>
            <Form.Control as="select" type="text" onChange={changeVisiblity} placeholder="" value={asset.visiblity}>
              <option value="visible">Published</option>
              <option value="private">Unpublished</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  )
}

export default Details

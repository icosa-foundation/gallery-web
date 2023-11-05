import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { useField, Field } from "formik"

const ImageInput = ({ field, form, ...props }) => {
  const [fieldProps, meta] = useField(field.name);
  const [preview, setPreview] = React.useState('');

  React.useEffect(() => {
    if (field.value) {
      // If a value is provided (e.g., a URL), use it for the preview
      setPreview(field.value);
    }
  }, [field.value]);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    form.setFieldValue(field.name, file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
      <div>
        {preview && <img src={preview} alt="Preview" className="img-preview" />}
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        <input type="file" onChange={handleChange} {...props} />
      </div>
  );
};


const Details = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <label htmlFor="thumbnail">Thumbnail</label>
          <Field name="thumbnail" component={ImageInput} />
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

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    // Qui dovresti utilizzare un'API per inviare il formData al backend
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFile">
        <Form.Label>Seleziona un'immagine</Form.Label>
        <Form.Control
          type="file"
          onChange={(event) => setSelectedFile(event.target.files[0])}
        />
      </Form.Group>
      <Button type="submit">Carica immagine</Button>
    </Form>
  );
}

export default ImageUpload;

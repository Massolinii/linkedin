import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsWordpress,
  BsEmojiExpressionless,
  BsImage,
  BsCloudFog,
} from "react-icons/bs";

function FormPost({ handleclose3 }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Form>
        <div className="d-flex justify-content-between">
          <div>
            <img src="https://placekitten.com/200" alt="" />
          </div>
          <div>
            <h5>Nome utente</h5>
            <a href="*">
              <BsWordpress /> Chiunque
            </a>
          </div>
        </div>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="Di cosa vorresti paralre?" />
        </Form.Group>
        <BsEmojiExpressionless />

        <div>
          <div>
            <Button variant="primary" type="submit">
              <BsImage />
              Foto
            </Button>
          </div>
        </div>
      </Form>

      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <a href="*">
            <BsCloudFog />
            Tutti
          </a>
          <Button variant="primary">Pubblica</Button>
        </div>
      </Modal.Footer>
    </div>
  );
}

export default FormPost;

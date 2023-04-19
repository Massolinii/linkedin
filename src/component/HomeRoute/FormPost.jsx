import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsWordpress,
  BsEmojiExpressionless,
  BsImage,
  BsFillCaretDownFill,
} from "react-icons/bs";

function FormPost({ handleclose3 }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Form>
        <div className="d-flex">
          <div className="icona-per-post">
            <img src="https://placekitten.com/200" alt="" />
          </div>
          <div className="privacyPost mx-2">
            <h5>Nome utente</h5>
            <a href="*">
              <BsWordpress className="mx-2" /> Chiunque{" "}
              <BsFillCaretDownFill className="mx-2" />
            </a>
          </div>
        </div>
        <Form.Group className="mb-3 mt-3">
          <Form.Control
            as="textarea"
            placeholder="Di cosa vorresti paralre?"
            className="postArea"
          />
        </Form.Group>
        <BsEmojiExpressionless className="ms-3 " />

        <div className="d-flex mt-3">
          {/* FOTO */}
          <Button variant="primary" type="submit" className="btnn foto">
            <div>
              <BsImage />
            </div>
            <p>Foto</p>
          </Button>

          {/* VIDEO */}
          <Button variant="primary" type="submit" className="btnn foto">
            <div>
              <BsImage />
            </div>
            <p>Video</p>
          </Button>

          {/* EVENTO */}
          <Button variant="primary" type="submit" className="btnn foto">
            <div>
              <BsImage />
            </div>
            <p>Evento</p>
          </Button>

          {/* ALTRO */}
          <Button variant="primary" type="submit" className="btnn foto">
            <div>
              <BsImage />
            </div>
            <p>Altro</p>
          </Button>
        </div>
      </Form>

      <Modal.Footer className="mt-4">
        <Button type="submit" variant="primary">
          Pubblica
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default FormPost;

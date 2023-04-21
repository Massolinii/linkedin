import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsGlobeAmericas,
  BsEmojiExpressionless,
  BsImage,
  BsFillCaretDownFill,
  BsCameraVideo,
  BsCalendar2DateFill,
  BsThreeDots,
  BsClock,
  BsChatText,
} from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

function FormPost({ handleclose3 }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Form>
        <div className="d-flex">
          <div className="icona-per-post ms-2">
            <img src="https://placekitten.com/200" alt="" />
          </div>
          <div className="privacyPost mx-2">
            <h5>Nome utente</h5>
            <a href="*">
              <BsGlobeAmericas className="mx-2" /> Chiunque{" "}
              <BsFillCaretDownFill className="mx-2" />
            </a>
          </div>
        </div>
        <Form.Group className="mb-5 mt-3">
          <Form.Control
            as="textarea"
            placeholder="Di cosa vorresti paralre?"
            className="postArea"
          />
        </Form.Group>
        <BsEmojiExpressionless className="ms-3 fs-4 text-secondary" />

        <div className="d-flex mt-3">
          {/* FOTO */}
          <Button variant="light" type="submit" className="btnn foto">
            <div className="roundBtn" style={{ backgroundColor: "#0966c2" }}>
              <BsImage style={{ fontSize: "25px", color: "#dbe7e9" }} />
            </div>
            <p style={{ color: "#0966c2" }}>Foto</p>
          </Button>

          {/* VIDEO */}
          <Button variant="light" type="submit" className="btnn video">
            <div className="roundBtn" style={{ backgroundColor: "#8F5849" }}>
              <BsCameraVideo style={{ fontSize: "25px", color: "#fde2ba" }} />
            </div>
            <p style={{ color: "#8F5849" }}>Video</p>
          </Button>

          {/* EVENTO */}
          <Button variant="light" type="submit" className="btnn evento">
            <div className="roundBtn" style={{ backgroundColor: "#81597E" }}>
              <BsCalendar2DateFill
                style={{ fontSize: "25px", color: "#fadfd8" }}
              />
            </div>
            <p style={{ color: "#81597E" }}>Evento</p>
          </Button>

          {/* ALTRO */}
          <Button variant="light" type="submit" className="btnn altro">
            <div className="roundBtn" style={{ backgroundColor: "#666666" }}>
              <BsThreeDots style={{ fontSize: "25px", color: "#f3f2ef" }} />
            </div>
            <p style={{ color: "#666666" }}>Altro</p>
          </Button>
        </div>
      </Form>

      <Modal.Footer className="mt-4 d-flex justify-content-between">
        <Col className="d-flex justify-content-between align-items-center">
          <Col className="text-secondary">
            <BsChatText className="me-2" />
            tutti
          </Col>
          <span>
            <BsClock className="me-3 fs-4 text-secondary" />
            <Button
              type="submit"
              variant="none"
              className="btnPubblish"
              disabled
            >
              Pubblica
            </Button>
          </span>
        </Col>
      </Modal.Footer>
    </div>
  );
}

export default FormPost;

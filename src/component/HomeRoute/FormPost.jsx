import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsWordpress,
  BsEmojiExpressionless,
  BsImage,
  BsFillCaretDownFill,
  BsCameraVideo,
  BsCalendar2DateFill,
  BsThreeDots,
} from "react-icons/bs";

function FormPost({ handleclose3 }) {
  function attivaButton() {
    document.querySelector(".btnPubblish").removeAttribute("disabled");
  }

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
            type="text"
            placeholder="Di cosa vorresti paralre?"
            className="postArea"
            noValidate
          />
        </Form.Group>
        <BsEmojiExpressionless className="ms-3 " />

        <div className="d-flex mt-3">
          {/* FOTO */}
          <Button variant="light" type="submit" className="btnn foto">
            <div className="roundBtn" style={{ backgroundColor: "#0966c2" }}>
              <BsImage style={{ fontSize: "25px", color: "#dbe7e9" }} />
            </div>
            <p>Foto</p>
          </Button>

          {/* VIDEO */}
          <Button variant="light" type="submit" className="btnn video">
            <div className="roundBtn" style={{ backgroundColor: "#8F5849" }}>
              <BsCameraVideo style={{ fontSize: "25px", color: "#fde2ba" }} />
            </div>
            <p>Video</p>
          </Button>

          {/* EVENTO */}
          <Button variant="light" type="submit" className="btnn evento">
            <div className="roundBtn" style={{ backgroundColor: "#81597E" }}>
              <BsCalendar2DateFill
                style={{ fontSize: "25px", color: "#fadfd8" }}
              />
            </div>
            <p>Evento</p>
          </Button>

          {/* ALTRO */}
          <Button variant="light" type="submit" className="btnn altro">
            <div className="roundBtn" style={{ backgroundColor: "#666666" }}>
              <BsThreeDots style={{ fontSize: "25px", color: "#f3f2ef" }} />
            </div>
            <p>Altro</p>
          </Button>
        </div>
      </Form>

      <Modal.Footer className="mt-4">
        <Button
          type="submit"
          variant="none"
          className="btnPubblish"
          onclick={attivaButton()}
          disabled
        >
          Pubblica
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default FormPost;

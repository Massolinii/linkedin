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
  BsPencil,
} from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/action/PostAction";

function FormEditPost() {
  const [postText, setPostText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postText));
    setPostText(""); // svuota il campo di input
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="link"
        className="text-dark editPost"
        onClick={handleShow}
      >
        <BsPencil className="fs-6 me-2" />
        Edit Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <div className="d-flex">
              <div className="icona-per-post">
                <img src="https://placekitten.com/200" alt="" />
              </div>
              <div className="privacyPost mx-2">
                <h5>{}</h5>
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
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
            </Form.Group>
            <BsEmojiExpressionless className="ms-3 " />

            <div className="d-flex mt-3">
              {/* FOTO */}
              <Button variant="light" type="button" className="btnn foto">
                <div
                  className="roundBtn"
                  style={{ backgroundColor: "#0966c2" }}
                >
                  <BsImage style={{ fontSize: "25px", color: "#dbe7e9" }} />
                </div>
                <p>Foto</p>
              </Button>

              {/* VIDEO */}
              <Button variant="light" type="button" className="btnn video">
                <div
                  className="roundBtn"
                  style={{ backgroundColor: "#8F5849" }}
                >
                  <BsCameraVideo
                    style={{ fontSize: "25px", color: "#fde2ba" }}
                  />
                </div>
                <p>Video</p>
              </Button>

              {/* EVENTO */}
              <Button variant="light" type="button" className="btnn evento">
                <div
                  className="roundBtn"
                  style={{ backgroundColor: "#81597E" }}
                >
                  <BsCalendar2DateFill
                    style={{ fontSize: "25px", color: "#fadfd8" }}
                  />
                </div>
                <p>Evento</p>
              </Button>

              {/* ALTRO */}
              <Button variant="light" type="button" className="btnn altro">
                <div
                  className="roundBtn"
                  style={{ backgroundColor: "#666666" }}
                >
                  <BsThreeDots style={{ fontSize: "25px", color: "#f3f2ef" }} />
                </div>
                <p>Altro</p>
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="modificaBtn" variant="none" onClick={handleClose}>
            MODIFICA
          </Button>
          <Button className="annullaPost" variant="none" onClick={handleClose}>
            ANNULLA
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormEditPost;

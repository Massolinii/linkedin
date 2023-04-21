import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsGlobeAmericas,
  BsEmojiExpressionless,
  BsImage,
  BsCameraVideo,
  BsCalendar2DateFill,
  BsThreeDots,
  BsClock,
  BsChatText,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../redux/action/PostAction";

function FormPost({ handleclose }) {
  const [postText, setPostText] = useState("");
  const [writing, setWriting] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.myProfile);

  const checkWriting = () => {
    if (postText.length - 1 !== 0) {
      setWriting(true);
    } else {
      setWriting(false);
    }

    console.log(writing);
  };
  const handleSubmit = (e) => {
    handleclose();
    e.preventDefault();
    dispatch(createPost(postText, formData));
    dispatch(getPosts);
    setPostText(""); // svuota il campo di input
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Form>
        <div className="d-flex">
          <div className="icona-per-post ms-2">
            <img src={user.image} alt="" />
          </div>
          <div className="privacyPost mx-2">
            <h5>{user.username}</h5>
            <a href="">
              <BsGlobeAmericas className="mx-2" /> Chiunque{" "}
              <BsFillCaretDownFill className="mx-2" />
            </a>
          </div>
        </div>
        <Form.Group className="mb-5 mt-3">
          <Form.Control
            type="text"
            placeholder="Di cosa vorresti paralre?"
            className="postArea"
            noValidate
            value={postText}
            onChange={(e) => {
              setPostText(e.target.value);
              checkWriting();
            }}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose a pic.</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              console.log(file);
              formData.append("post", file);
            }}
          />
        </Form.Group>
        <BsEmojiExpressionless className="ms-3 fs-4 text-secondary" />

        <div className="d-flex mt-3">
          {/* FOTO */}
          <Button variant="light" type="button" className="btnn foto">
            <div className="roundBtn" style={{ backgroundColor: "#0966c2" }}>
              <BsImage style={{ fontSize: "25px", color: "#dbe7e9" }} />
            </div>
            <p style={{ color: "#0966c2" }}>Foto</p>
          </Button>

          {/* VIDEO */}
          <Button variant="light" type="button" className="btnn video">
            <div className="roundBtn" style={{ backgroundColor: "#8F5849" }}>
              <BsCameraVideo style={{ fontSize: "25px", color: "#fde2ba" }} />
            </div>
            <p style={{ color: "#8F5849" }}>Video</p>
          </Button>

          {/* EVENTO */}
          <Button variant="light" type="button" className="btnn evento">
            <div className="roundBtn" style={{ backgroundColor: "#81597E" }}>
              <BsCalendar2DateFill
                style={{ fontSize: "25px", color: "#fadfd8" }}
              />
            </div>
            <p style={{ color: "#81597E" }}>Evento</p>
          </Button>

          {/* ALTRO */}
          <Button variant="light" type="button" className="btnn altro">
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
            <span className="fw-bold">Tutti</span>
          </Col>
          <span>
            <BsClock className="me-3 fs-4 text-secondary" />
            {writing ? (
              <Button
                type="button"
                variant="primary"
                className="btnPubblish"
                onClick={handleSubmit}
              >
                Pubblica
              </Button>
            ) : (
              <Button
                type="button"
                variant="secondary"
                className="btnPubblish"
                onClick={handleSubmit}
                disabled
              >
                Pubblica
              </Button>
            )}
          </span>
        </Col>
      </Modal.Footer>
    </div>
  );
}

export default FormPost;

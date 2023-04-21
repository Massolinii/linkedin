import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BsImage,
  BsPlayBtnFill,
  BsCalendar2DateFill,
  BsTextIndentLeft,
} from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import FormPost from "./FormPost";
import { PostHome } from "./PostHome";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import RightHome from "./RightHome";

const MiddleHome = () => {
  const [showPost, setShowPost] = useState(false);
  const handleclose3 = () => setShowPost(false);
  const handleShow3 = () => setShowPost(true);
  const profile = useSelector((state) => state.user.myProfile);
  const user = useSelector((state) => state.user.myProfile);
  return (
    <Row>
      {/*SOLO PER MOBILE*/}
      <Container className="d-sm-none ">
        <Row>
          <Card>
            <Card.Img
              variant="top"
              src="https://media.licdn.com/dms/image/D4D16AQH_FZDkDj5sow/profile-displaybackgroundimage-shrink_350_1400/0/1670341689480?e=1687392000&v=beta&t=5LSh9omqYGwXGvEo95GlfiwsH12FtnpriAW5rtpPwWM"
              style={{ height: "60px" }}
            />
            <div className="d-flex justify-content-center">
              <img
                className="profilePictureHome"
                src={user.image}
                alt="profile"
              />
            </div>
            <Card.Body className="pt-0 ">
              <Link
                to="/"
                style={{ color: "black", textDecoration: "inherit" }}
              >
                <Card.Title className="text-center m-0 fs-5 fw-bold">
                  {user.name} {user.surname}
                </Card.Title>
              </Link>
              <Card.Text className="textSmall text-center text-secondary">
                {user.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        {/*FINE MOBILE*/}
      </Container>
      <Container className="mt-4 p-4 border rounded-3 bg-white flex-wrap bg-light">
        {/* CONTAINER PER BACHECA */}
        <Row>
          <Col>
            <div className="d-flex h-25">
              <div className="">
                <img
                  className="profilePictureHome"
                  src={profile.image}
                  alt=""
                />
              </div>
              <Button onClick={handleShow3} className="btnStartPost">
                Avvia un post
              </Button>
            </div>
            {/* MODAL FOR POST */}
            <Modal show={showPost} onHide={handleclose3} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Crea un post</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <FormPost handleclose={handleclose3} />
              </Modal.Body>
            </Modal>

            <div className="d-flex justify-content-between   flex-wrap mt-4">
              {/* ICONA POST IMMAGINE */}
              <div id="postIcon" alt="icona-immagine">
                <a href="*" className="PostIcon">
                  <BsImage className="text-primary" />
                </a>
                <p>Foto</p>
              </div>
              {/* ICONA POST VIDEO */}
              <div id="postIcon" alt="icona-video">
                <a href="*" className="PostIcon">
                  <BsPlayBtnFill className="text-success" />
                </a>
                <p>Video</p>
              </div>
              {/* ICONA POST EVENTO */}
              <div id="postIcon" alt="icona-evento">
                <a href="*" className="PostIcon">
                  <BsCalendar2DateFill className="text-warning" />
                </a>
                <p>Evento</p>
              </div>
              {/* ICONA POST SCRIVI UN ARTICOLO */}
              <div id="postIcon" alt="icona-articoo">
                <a href="*" className="PostIcon">
                  <BsTextIndentLeft className="text-danger" />
                </a>
                <p>Scrivi un articolo</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <PostHome />
        </Row>
      </Container>
      {/*PER MOBILE*/}
      <Container className="d-sm-none">
        <Row>
          <RightHome />
        </Row>
      </Container>
    </Row>
  );
};

export default MiddleHome;

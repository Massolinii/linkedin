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
import Postnews from "./Postnews";

const MiddleHome = () => {
  const [showPost, setShowPost] = useState(false);
  const handleclose3 = () => setShowPost(false);
  const handleShow3 = () => setShowPost(true);

  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-white bg-light">
        {/* CONTAINER PER BACHECA */}
        <Row>
          <Col>
            <div className="d-flex h-25">
              <div className="profileIcon">
                <img src="https://placekitten.com/200" alt="" />
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

            <div className="d-flex justify-content-between mt-4">
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

      <Container className=" p-4 border rounded-3 bg-white bg-light">
        <Row>
          <Col>
            <Postnews />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MiddleHome;

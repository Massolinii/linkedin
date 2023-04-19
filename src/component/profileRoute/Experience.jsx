import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  BsPlusLg,
  BsPencil,
  BsBriefcaseFill,
  BsClockFill,
} from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AddExperience from "./FormExperience/AddExperience";
import BreakExperience from "./FormExperience/BreakExperience";
import SingleExp from "./SingleExp";
import { useSelector } from "react-redux";

const Experience = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const listUserExp = useSelector((state) => state.experience.experiences);
  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShowPause(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShowPause(true);

  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <div className="d-flex justify-content-between">
            <h4>Esperienza</h4>
            <div className="d-flex justify-content-between">
              <Dropdown
                show={showDropdown}
                onClose={() => setShowDropdown(false)}
              >
                <BsPlusLg
                  className="d-flex me-4 btnChange"
                  variant="secondary"
                  id="dropdown-basic"
                  onClick={handleToggle}
                />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShow}>
                    <BsBriefcaseFill className="me-2" /> Aggiungi Posizione
                    Lavorativa
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleShow2}>
                    <BsClockFill className="me-2" /> Aggiungi Pausa Lavorativa
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <BsPencil className="btnChange" />
            </div>
          </div>

          {/* ADDEXPERIENCE */}
          <div id="modal">
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi esperienza</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddExperience handleClose={handleClose} />
              </Modal.Body>
            </Modal>
          </div>

          {/* EDIT EXPERIENCE */}
        </Row>

        {listUserExp.slice(2, listUserExp.length).map((exp) => (
          <SingleExp exp={exp}></SingleExp>
        ))}
      </Container>
    </>
  );
};

export default Experience;

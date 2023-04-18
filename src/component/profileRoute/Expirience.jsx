import { Container, Row, Col } from "react-bootstrap";
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

const Experience = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddPosition = () => {
    setShowModal(true);
  };

  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <div className="d-flex justify-content-between">
            <h4>Esperienza</h4>
            <div className="d-flex justify-content-between">
              <div>
                <Dropdown
                  show={showDropdown}
                  onClose={() => setShowDropdown(false)}
                >
                  <Dropdown.Toggle
                    as={BsPlusLg}
                    className="me-4"
                    variant="secondary"
                    id="dropdown-basic"
                    onClick={handleToggle}
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleAddPosition}>
                      <BsBriefcaseFill className="me-2" /> Aggiungi Posizione
                      Lavorativa
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <BsClockFill className="me-2" /> Aggiungi Pausa Lavorativa
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <BsPencil />
            </div>
          </div>
          <Col className="d-flex">
            <img src="*" alt="LOGO AZIENDA" className="me-2" />
            <Row>
              <h5>Nome azienda</h5>
              <p>Durata</p>
              <p>Luogo</p>
              <p>
                Competenze: <span>qui dentro ci vanno le competenze </span>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
      <AddExperience show={showModal} onClose={handleModalClose} />
    </>
  );
};

export default Experience;

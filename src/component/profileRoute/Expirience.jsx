import { Container, Row, Col } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <div className="d-flex justify-content-between">
            <h4>Esperienza</h4>
            <div>
              <BsPlusLg className="me-4" />
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
    </>
  );
};

export default Experience;

import { Container, Col, Row } from "react-bootstrap";
const LeftHome = () => {
  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-white bg-light">
        <Row>
          <Col>
            <Row>
              <h6 className="text-center mt-2">Chiara Andria</h6>
              <p className="text-secondary">
                Studente presso iis Falcone Borsellino
              </p>
            </Row>
            <hr />
            <Row>
              <p className="text-secondary">Collegamenti</p>
              <p>Espandi la tua rete</p>
            </Row>
            <hr />
            <Row>
              <p className="text-secondary">
                Accedi a strumenbti e informazioni in esclusiva
              </p>
              <p>Prova Premium gratis</p>
            </Row>
            <hr />
            <Row>
              <p>I miei elementi</p>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row
          className="d-flex flex-column border border-grey rounded-3 bg-white mt-2"
          style={{ fontSize: 12 }}
        >
          <Col className=" mt-2 mb-2">Recenti</Col>
          <Col className="text-primary fw-bold mt-2 mb-2">Gruppi</Col>
          <Col className="text-primary fw-bold mt-2 mb-2">Eventi</Col>
          <Col className="text-primary fw-bold mt-2 mb-2">Hashtag seguiti</Col>
          <hr />
          <Col className="text-secondary text-center mb-2"> Scopri di più</Col>
        </Row>
      </Container>
    </>
  );
};

export default LeftHome;

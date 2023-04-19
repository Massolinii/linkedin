import { Container,Col, Row } from "react-bootstrap"
const LeftHome = () => {
  return (
    <Container className="ms-auto mt-3" style={{width:'16rem'}}>
        <Col>
        <Row className="border border-2 border-grey rounded-3 bg-white" style={{fontSize:12}}>
            <Col>
            <h6 className="text-center mt-2">Chiara Andria</h6>
            <p className="text-secondary">Studente presso iis Falcone Borsellino</p>
            </Col>
            <hr />
            <Col>
            <p className="text-secondary">Collegamenti</p>
            <p>Espandi la tua rete</p>
            </Col>
            <hr />
            <Col>
            <p className="text-secondary">Accedi a strumenbti e informazioni in esclusiva</p>
            <p>Prova Premium gratis</p>
            </Col>
            <hr />
            <Col>
            <p>I miei elementi</p>
            </Col>
        </Row>
        <Row className="d-flex flex-column border border-2 border-grey rounded-3 bg-white mt-2" style={{fontSize:12}}>
          <Col className=" mt-2 mb-2">Recenti</Col>
          <Col className="text-primary fw-bold mt-2 mb-2">Gruppi</Col>
          <Col className="text-primary fw-bold mt-2 mb-2" >Eventi</Col>
          <Col  className="text-primary fw-bold mt-2 mb-2">Hashtag seguiti</Col>
          <hr/>
          <Col className="text-secondary text-center mb-2"> Scopri di più</Col>
        </Row>
        </Col>
    </Container>
  );
};

export default LeftHome;

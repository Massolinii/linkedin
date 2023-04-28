import { Container, Row, Col } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";

const Skills = () => {
  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <div className="d-flex justify-content-between">
            <h4>Competenze</h4>
            <div className="mt-4">
              <a
                className="me-3 btnQuiz"
                style={{
                  textDecoration: "none",
                  border: "1px solid blue",
                  borderRadius: "20px",
                  padding: "10px",
                  fontWeight: "bold",
                }}
                href="*"
              >
                Quiz valutazione competenze
              </a>
              <BsPlusLg className="me-4" />
              <BsPencil />
            </div>
          </div>
          <Col>
            <Row>
              <h5>Nome skills</h5>
              {/* se volete possiamo mettere l'imamgine a sinistra dello skills come su linkedin vero ma perchè volerci male? */}
              <p>tipi di skills</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;

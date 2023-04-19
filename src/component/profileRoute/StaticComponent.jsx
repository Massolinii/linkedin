// COMPONENTI STATICI: ANALISI / RISORSE / ATTIVITA

import { Container, Row, Col } from "react-bootstrap";
import {
  BsEyeFill,
  BsPeopleFill,
  BsGraphUp,
  BsSearch,
  BsWifi,
} from "react-icons/bs";

const StaticComponent = () => {
  return (
    <>
      {/* FIRST PROFILE SECTION */}
      <Container className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <Col sm={8} md={12}>
            <h4 className="mb-0">Analisi</h4>
            <BsEyeFill className="mt-0 text-secondary" />
            <span className="mt-0 ms-2 text-secondary">Solo per te</span>
          </Col>
          <Row>
            {/* VISUALIZZAZIONI DEL PROFILO */}
            <Col className="mt-3 d-flex ">
              <BsPeopleFill className="text-secondary me-2" />
              <span>
                <span style={{ fontWeight: "bold" }}>
                  N. visualizzazioni del profilo
                </span>
                <br />
                Scopri chi ha visitato il tuo profilo.
              </span>
            </Col>
            {/* IMPRESSIONI DEL POST */}
            <Col className="mt-3 d-flex ">
              <BsGraphUp className="text-secondary me-2" />
              <span>
                <span style={{ fontWeight: "bold" }}>
                  N. impressioni del post
                </span>
                <br />
                Scopri chi sta integrando con i tuoi post.
              </span>
            </Col>
            {/* COMPARSE NEI MOTORI DI RICERCA */}
            <Col className="mt-3 d-flex ">
              <BsSearch className="text-secondary me-2" />
              <span>
                <span style={{ fontWeight: "bold" }}>
                  N. comparse nei motori di ricerca
                </span>
                <br />
                Vedi quante volte compari nei risulatati di ricerca.
              </span>
            </Col>
          </Row>
        </Row>
      </Container>

      {/* SECOND PROFILE SECTION */}
      <Container className="mt-4 p-4 border border-1 rounded-3 bg-light">
        <Row>
          <Col sm={8} md={12}>
            <h4 className="mb-0">Risorse</h4>
            <BsEyeFill className="mt-0 text-secondary" />
            <span className="mt-0 ms-2 text-secondary">Solo per te</span>
          </Col>
          {/* CREAZIONE CONTENUTI */}
          <Row className="mt-3">
            <span className="d-flex">
              <BsWifi className="text-secondary me-2" />
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Modalità creazione di contenuti{" "}
                  <a
                    href="*"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      backgroundColor: "lightgray",
                      padding: "4px",
                      borderRadius: "8px",
                    }}
                  >
                    No
                  </a>
                </div>
                Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                accedi agli strumenti di creazione
              </div>
            </span>
          </Row>

          <hr className="mb-2 mt-2 d-flex " style={{ width: "70vw" }} />

          {/* LA MIA RETE */}
          <Row>
            <span className="d-flex">
              <BsPeopleFill className="text-secondary me-2" />
              <div>
                <div style={{ fontWeight: "bold" }}>La mia rete</div>
                Salva e gestisci i tuoi collegamenti
              </div>
            </span>
          </Row>
        </Row>
      </Container>
    </>
  );
};
export default StaticComponent;

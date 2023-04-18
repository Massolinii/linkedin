import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { BsPencil, BsX } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroProfile() {
  return (
    // HERO SECTION
    <Container
      sm={12}
      md={8}
      className="cover-image mt-4 p-3 border rounded-3 bg-light"
    >
      <Container className="profile-container">
        <Row className="d-flex align-items-end">
          <Container>
            <Row>
              <Col className="p-0">
                <div
                  className="profileCover"
                  style={{
                    backgroundImage: "url(https://placekitten.com/800/300)",
                  }}
                >
                  {/* IMMAGINE COPERTINA */}
                </div>
                <div className="profilePicWrap">
                  <Image
                    src="https://placekitten.com/200"
                    alt="profile-picture"
                    roundedCircle
                    className="profilePic"
                  />
                  {/* IMMAGINE PROFILO */}
                </div>
              </Col>
            </Row>
          </Container>{" "}
          <Row className="ancorHero" style={{ fontSize: "15px" }}>
            <div className="d-flex justify-content-between">
              <h2 className="mb-0 mt-0">Pinco Pallino</h2>
              <BsPencil />
            </div>
            <p className="mb-0">Web Developer || Full-Stak</p>
            <p className="mb-0 mt-3 text-secondary">
              Milano, Lombardia, Italia &middot;{" "}
              <a
                href="*"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                Informazioni di contatto
              </a>{" "}
            </p>
            <a
              href="*"
              className="mb-0 mt-1"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              245 collegamenti
            </a>
          </Row>
          <Row id="btn-hero" className="mt-2">
            <Button className="bg-primary text-light border rounded-5">
              Disponibile per
            </Button>
            <Button className="bg-light border rounded-5 text-primary">
              Aggiungi sezione del profilo
            </Button>
            <Button className="bg-light border rounded-5 text-secondary">
              Altro
            </Button>
          </Row>
        </Row>
        <Row>
          <Col
            className="mt-4 p-3 me-4"
            style={{
              width: "100px",
              backgroundColor: "rgba(123, 148, 169, 0.388)",
              borderRadius: "20px",
            }}
          >
            <div className="d-flex justify-content-between">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Disponibile a lavorare
              </p>
              <BsPencil />
            </div>
            <p className="mb-0">Ruoli di Sviluppatore Full Stack</p>
            <a style={{ fontWeight: "bold", textDecoration: "none" }} href="*">
              Mostra dettagli
            </a>
          </Col>

          <Col
            className="mt-4 p-3 border border-1"
            style={{
              width: "150px",
              backgroundColor: "transparent",
              borderRadius: "20px",
            }}
          >
            <div className="d-flex justify-content-between">
              <p style={{ fontWeight: "bold" }}>
                Fai sapere che stai facendo selezione{" "}
                <span style={{ fontWeight: "lighter" }}>
                  e attrai candidati qualificati
                </span>
                .
              </p>
              <BsX />
            </div>
            <a style={{ fontWeight: "bold", textDecoration: "none" }} href="*">
              Inizia
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroProfile;

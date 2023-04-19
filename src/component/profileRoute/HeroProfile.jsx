import { Container, Row, Col, Image } from "react-bootstrap";
import { BsPencil, BsX } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function HeroProfile() {
  const profile = useSelector((state) => state.user.myProfile);

  return (
    // HERO SECTION
    <Container
      sm={12}
      md={8}
      className="cover-image mt-4 p-3 border rounded-3 bg-light"
    >
      <Container>
        <Row className="d-flex align-items-end">
          <Container>
            <Row style={{ height: "400px" }}>
              <Col className="p-0 m-0">
                <Col className="profileCover">{/* IMMAGINE COPERTINA */}</Col>
                <div className="profilePicWrap">
                  <Image
                    src={profile.image}
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
              <h2 className="mb-0 mt-0">
                {profile.name} {profile.surname}
              </h2>
              <BsPencil />
            </div>
            <p className="mb-0">{profile.title}</p>
            <p className="mb-0 mt-3 text-secondary">
              {profile.area} &middot;{" "}
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
          <Row className="mt-2 btn-hero">
            <a className="bg-primary text-light border rounded-5" href=".">
              Disponibile per
            </a>
            <a
              className="bg-light border rounded-5 text-primary btnQuiz"
              href="."
            >
              Aggiungi sezione del profilo
            </a>
            <a className="bg-light border rounded-5 text-secondary" href=".">
              Altro
            </a>
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

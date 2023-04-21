import { Card, Container, Row } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";

const RightHome = () => {
  /* const annuncio = useSelector((state) => state.profile);*/
  return (
    <Row>
      <Container>
        <Card className="CardnewRight">
          <Card.Title className="Cardrightnew d-flex  justify-content-between">
            <h3 className="TitleNew mt-3 mb-0 ps-3">LinkedIn Notizie </h3>
            <BsInfoSquareFill className="IconInformation  me-3 text-muted" />
          </Card.Title>

          <Card.Body className="pt-0">
            <ul className="pt-0">
              <li>
                <p className="fsl mb-0 text-truncate">
                  Le Top Companies del 2023 in Italia
                </p>
                <small className="sml fs-10 text-secondary">
                  Notizie principali · 424 lettori
                </small>
              </li>

              <li>
                <p className="fsl mb-0 text-truncate">
                  Un nuovo modello contrattuale per la ricerca
                </p>
                <small className=" sml fs-10 text-secondary">17 ore fa</small>
              </li>

              <li>
                <p className="fsl mb-0 text-truncate">Apple sfida le banche</p>
                <small className="sml fs-10 text-secondary">
                  4 ore fa · 186 lettori
                </small>
              </li>

              <li>
                <p className="fsl mb-0 text-truncate">
                  Che cosa succede al Salone del Mobile
                </p>
                <small className=" sml fs-10 text-secondary">
                  3 ore fa · 344 lettori
                </small>
              </li>

              <li>
                <p className="fsl mb-0 text-truncate">
                  I giovani occupati stanno diminuendo
                </p>
                <small className=" sml fs-10 text-secondary">
                  3 ore fa · 543 lettori
                </small>
              </li>
            </ul>
          </Card.Body>
        </Card>
        <div className="footer-card d-flex justify-content-between ms-4 mt-4">
          <div className=" d-flex flex-wrap justify-content-center">
            <a href="#">Informazioni</a>
            <a href="#">Accessibilità</a>
            <a href="#">Centro assistenza</a>
            <a href="#">Privacy e condizioni</a>
            <a href="#">Opzioni per gli annunci pubblicitari</a>
            <a href="#">Pubblicità</a>
            <a href="#">Servizi alle aziende</a>
            <a href="#">Scarica l'app LinkedIn</a>
            <a href="#">Altro</a>
            <p className="footerCopirightsec mb-2">
              <span>
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
                  className="linkedLogo"
                  alt="logolinkedin"
                />
              </span>
              Corporation © 2023
            </p>
          </div>
        </div>
      </Container>
    </Row>
  );
};
export default RightHome;

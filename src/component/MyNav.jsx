import { Col, Row, Form, Dropdown, Stack, Container } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdHome, MdWork, MdNotifications } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import { TbMessageCircle2Filled } from "react-icons/tb";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProfile,
  getThisProfile,
  getUserProfile,
  setThisUserID,
} from "../redux/action/UserAction";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
const MyNav = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.myProfile);
  const [fetch, setFetch] = useState(false);
  //const thisID = useSelector((state) => state.user.thisProfile.userID);

  const checkFetch = () => {
    if (fetch) {
      console.log("fetched yet");
    } else {
      dispatch(getAllProfile);
      dispatch(getUserProfile);
      setFetch(true);
    }
  };
  useEffect(() => {
    checkFetch();
  }, []);
  return (

    <Row className="w-100 navbar-navigation d-flex justify-content-center">
      <Col
        className="nav-col d-flex justify-content-center align-items-center"
        xs={10}
      >
        <div className="input-search d-flex align-items-center">
          <AiFillLinkedin className="linkedin-logo" />
          <Form className="d-flex form d-none d-lg-block">
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-2 form-ricerca"
              aria-label="Search"
            />
          </Form>
        </div>

        <ul className="ul-nav ms-5">
          <li>
            <Link className="text-secondary " to="/">
              <MdHome className="i-nav home" />
              <span className="d-none d-lg-block">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/rete" className="text-secondary ">
              <BsFillPeopleFill className="i-nav" />
              <span className="d-none d-lg-block">Rete</span>
            </Link>
          </li>
          <li>
            <Link className="text-secondary " to="/job">
              <MdWork className="i-nav tu text-secondary-special" />
              <span className="d-none d-lg-block">Job</span>
            </Link>
          </li>
          <li>
            <Link to="/messaggistica" className="text-secondary ">
              <TbMessageCircle2Filled className="i-nav" />
              <span className="d-none d-lg-block">Messaggistica</span>
            </Link>
          </li>
          <li>
            <Link to="/notifiche" className="text-secondary">
              <MdNotifications className="i-nav" />
              <span className="d-none d-lg-block">Notifiche</span>
            </Link>
          </li>
          <li>
            <span className="text-secondary ">
              <img
                className="rounded-circle"
                src={profile.image}
                width={20}
                alt=""
              />
              <span className="d-none text-secondary  d-lg-block">Tu</span>
              <NavDropdown
                id="navbarScrollingDropdown"
                className="freccia-dropdown"
              >
                <Dropdown.ItemText className="d-block ">
                  <Row>
                    <Col xs={2}>
                      <img
                        className="rounded-circle"
                        src={profile.image}
                        width={50}
                        alt=""
                      />
                    </Col>

                    <Col xs={9} className="ps-4">
                      <Row>
                        <b>
                          {profile.name}
                          {profile.surname}
                        </b>
                      </Row>
                      <Row className="pt-1 pb-2">
                        <span>
                          {" "}
                          {/* {profile.title.length < 16
                            ? profile.title
                            : profile.title.substring(0, 16) + "..."} */}
                        </span>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col>
                      <Link
                        className="toProfile btn btn-outline-primary py-0 "
                        to="/profile"
                      >
                        Visualizza profilo
                      </Link>
                    </Col>
                  </Row>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.ItemText className="d-block">
                  <b>Account</b> <br />
                  <Link to={"/profile/5fc4af0bb708c200175de88e"}>
                    Impostazioni e privacy
                  </Link>
                  <br />
                  <Link>Guida</Link>
                  <br />
                  <Link>Lingua</Link>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.ItemText className="d-block">
                  <b>Gestisci</b> <br />
                  <Link className="text-muted">Post e Attività</Link>
                  <br />
                  <Link className="text-muted">
                    Account per la pubblicazione di offerte
                  </Link>
                  <br />
                </Dropdown.ItemText>
                <NavDropdown.Divider />

                <Dropdown.Item href="#action5">Esci</Dropdown.Item>
              </NavDropdown>
            </span>
          </li>
        </ul>
        <ul className="ul-nav ul-ul">
          <li>
            <CgMenuGridR className="i-nav" />
            <span className="d-none text-secondary link-nav d-xl-block">
                Lavoro
  </span><NavDropdown variant='secondary' className="freccia-dropdown">
              <NavDropdown.Item>
                <h4>Per le aziende</h4>
              <Card >
              <Card.Body><Container>
                <Col>
                <Row>
                <h5 className="mb-3">Scopri altri prodotti LinkedIn</h5>
                <hr />
                <Stack direction="horizontal">
                {/*<RiVideoChatFill/>*/}
                <p className="mx-3"><a href="#"className='linkLavoro'>Learning</a></p>
                <p className="mx-3"><a href="#"className='linkLavoro'>Insights</a></p>
                <p className="mx-3"><a href="#"className='linkLavoro'>Pubblica un'offerta di lavoro</a></p>
                <p className="mx-3"><a href="#"className='linkLavoro'>Pubblicizza</a></p>
                </Stack>
                <Stack direction='horizontal'>
                <p className="mx-3 "><a href="#"className='linkLavoro'>Trova Lead</a></p>
                <p className="mx-3 "><a href="#"className='linkLavoro'>Gruppi</a></p>
                <p className="mx-3 "><a href="#"className='linkLavoro'>Marketplace dei servizi</a></p>
                </Stack>
                </Row>
                </Col>
                </Container>
                </Card.Body>
               </Card>
               <Card className="mt-3">
                <Container id='container-all'>
                <Col>
                <Row>
                    <h5 className="m-3">Assistenza alle aziende di Linkedin</h5>
                    <hr />
                    <h6>Talent Solutions</h6>
                    <p><a href="#" className='linkLavoro'>Trova, attrai e assumi</a></p>
                    <h6>Sales Solutions</h6>
                    <p><a href="#" className='linkLavoro'>Sblocca nuove opportunità di vendita</a></p>
                    <h6>Pubblica offerta di lavoro gratuita</h6>
                    <p><a href="#" className='linkLavoro'>Raggiungi i migliori candidati con la tua offerta di lavoro</a></p>
                    <h6>Marketing Solutions</h6>
                    <p><a href="#" className='linkLavoro'>Acquisisci clienti e fai crescere la tua azienda</a></p>
                    <h6>Learning Solutions</h6>
                    <p><a href="#" className='linkLavoro'>Promuovi l’acquisizione di competenze nella tua organizzazione</a></p>
                    <hr />
                    <h6><a href="#" className='linkLavoro'>Crea una pagina aziendale</a></h6> <button>+</button>
                </Row>
                </Col>
                </Container>
               </Card>
              </NavDropdown.Item>
              </NavDropdown>
          </li>
          <li>
            <a className="premium text-secondary " href="a">
              Prova Premium
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default MyNav;

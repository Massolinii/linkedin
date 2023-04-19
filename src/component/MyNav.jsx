import { Col, Row, Form, Stack, Container } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdHome, MdWork, MdNotifications } from "react-icons/md";
import { BsFillPeopleFill, } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import {TbMessageCircle2Filled} from 'react-icons/tb'
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown"
import { Card } from "react-bootstrap";

const MyNav= () => {
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
            <MdHome className="i-nav home" />
            <Link className="text-secondary link-nav" to="/">

              <span className="d-none d-lg-block">Home</span>
            </Link>
          </li>
          <li>
            <BsFillPeopleFill className="i-nav" />
            <span className="d-none d-lg-block">Rete</span>
          </li>
          <li>
          <Link className="text-secondary link-nav" to="/job">

            <MdWork className="i-nav tu text-secondary-special" />
              <span className="d-none d-lg-block">
                Job 
              </span>
            </Link>
</li>
          <li>
            <TbMessageCircle2Filled className="i-nav" />
            <span className="d-none d-lg-block">Messaggistica</span>
          </li>
          <li>
            <MdNotifications className="i-nav" />
            <span className="d-none d-lg-block">Notifiche</span>
          </li>
          <li>

            <Link className="text-secondary link-nav" to="/Me/me">

              <span className="d-none text-secondary link-nav d-lg-block">
                Tu 
  </span><NavDropdown id="navbarScrollingDropdown" className="freccia-dropdown">
              <NavDropdown.Item><Button variant="outline-primary">Visualizza profilo</Button></NavDropdown.Item>  
                <NavDropdown.Item href="#action3">
              
                  <h6>Account</h6>
                  <Nav.Link className="fw-bold text-secondary"> Prova Premium gratis</Nav.Link>
                  <Nav.Link className="text-secondary">Impostazioni e privacy</Nav.Link>
                  <Nav.Link className="text-secondary">Guida</Nav.Link>
                  <Nav.Link className="text-secondary">Lingua</Nav.Link>
                </NavDropdown.Item>
                <hr></hr>
                <NavDropdown.Item href="#action4">
                 <h6> Gestisci </h6>
                  <Nav.Link className="text-secondary">Post e Attività</Nav.Link>
                  <Nav.Link className="text-secondary">Account per la pubblicazione di offerte</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
               
                <NavDropdown.Item href="#action5">Esci</NavDropdown.Item>
              </NavDropdown>
            </Link>
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
            <a className="premium text-secondary " href="a">Prova Premium</a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default MyNav;

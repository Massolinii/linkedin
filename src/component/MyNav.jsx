import { Col, Row, Form } from "react-bootstrap";
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
              
                  Account <br></br>
                  <Nav.Link>Impostazioni e privacy</Nav.Link>
                  <Nav.Link>Guida</Nav.Link>
                  <Nav.Link>Lingua</Nav.Link>
                </NavDropdown.Item>
                <hr></hr>
                <NavDropdown.Item href="#action4">
                  Gestisci <br />
                  <Nav.Link>Post e Attività</Nav.Link>
                  <Nav.Link>Account per la pubblicazione di offerte</Nav.Link>
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
            <span className="d-none d-lg-block">
              Lavoro <IoMdArrowDropdown className="freccia-dropdown" />
            </span>
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

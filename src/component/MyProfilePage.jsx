import { Container, Row, Col } from "react-bootstrap";
// import MyNav from "./MyNav";
// import MyFooter from "./MyFooter";
import HeroProfile from "./profileRoute/HeroProfile";
import "bootstrap/dist/css/bootstrap.min.css";

const MyProfilePage = () => {
  return (
    <>
      <Container fluid>
        {/* <MyNav /> */}
        <Row className="justify-content-center">
          <Col sm={12} md={7}>
            <HeroProfile />
            <h1>Ciao</h1>
            <Row>{/* HERO */}</Row>
            <Row>{/* INFORMAZIONI */}</Row>
            <Row>{/* INTERESSI */}</Row>
            <Row>{/* FORMAZIONE */}</Row>
          </Col>
          <Col xs={0} md={4} lg={4}>
            <Row>{/* OTHER PEOPLE */}</Row>
            <Row>{/* SUGGESTED*/}</Row>
            <Row>{/* MY FRIENDs */}</Row>
          </Col>
        </Row>
        {/* <MyFooter /> */}
      </Container>
    </>
  );
};

export default MyProfilePage;

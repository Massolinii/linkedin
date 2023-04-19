import { Container, Row, Col } from "react-bootstrap";

const MyHomePage = () => {
  return (
    <Container>
      <Row>
        <Col sm={0} md={3} lg={2}></Col>
        <Col sm={0} md={8} lg={6}></Col>
        <Col sm={0} md={0} lg={4}></Col>
      </Row>
    </Container>
  );
};

export default MyHomePage;

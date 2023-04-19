import { Container, Row, Col } from "react-bootstrap";
import LeftHome from "./HomeRoute/LeftHome";
import MiddleHome from "./HomeRoute/MiddleHome";
import RightHome from "./HomeRoute/RightHome";

const MyHomePage = () => {
  return (
    <Container>
      <Row>
        <Col sm={0} md={3} lg={2}>
          <LeftHome />
        </Col>
        <Col sm={0} md={8} lg={6}>
          <MiddleHome />
        </Col>
        <Col sm={0} md={0} lg={4}>
          <RightHome />
        </Col>
      </Row>
    </Container>
  );
};

export default MyHomePage;

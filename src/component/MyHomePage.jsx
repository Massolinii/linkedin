import { Container, Row, Col } from "react-bootstrap";
import LeftHome from "./HomeRoute/LeftHome";
import MiddleHome from "./HomeRoute/MiddleHome";
import RightHome from "./HomeRoute/RightHome";

const MyHomePage = () => {
  return (
    <Container>
      <Row>
        <Col sm={0} md={3} lg={3} xl={3} xxl={3} className="d-none d-md-block">
          <LeftHome />
        </Col>
        <Col sm={12} md={8} lg={6} xl={6} xxl={6}>
          <MiddleHome />
        </Col>
        <Col sm={0} md={0} lg={3} xl={3} xxl={3} className="d-none d-md-block">
          <RightHome />
        </Col>
      </Row>
    </Container>
  );
};

export default MyHomePage;

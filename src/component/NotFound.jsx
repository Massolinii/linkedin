import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Col>
      <Row className="justify-content-center notfound">
        <Col xs={6}>
          <br />
          <br />
          <br />
          <div className="text-center">
            <h1>Page not found :{"("}</h1>
            <Link to="/" className="btn btn-outline-primary">
              HOME
            </Link>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default NotFound;

import { Container, Row, Col } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { useSelector } from "react-redux";

const Information = () => {
  const profile = useSelector((state) => state.user.myProfile);
  return (
    <div>
      <Container className="mt-4 p-4 border border-1 rounded-3 bg-light">
        <Row>
          <Col sm={8} md={12}>
            <div className="d-flex justify-content-between">
              <h4>Informazioni</h4>
              <BsPencil />
            </div>
            <p>
              {profile.bio}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;

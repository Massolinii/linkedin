import { Container, Row, Col } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";

const Information = () => {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              nemo. Porro, dolores placeat. Doloremque assumenda fuga, at
              exercitationem iste error fugiat obcaecati ratione dolores ipsa
              eum velit animi veritatis! Error.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;

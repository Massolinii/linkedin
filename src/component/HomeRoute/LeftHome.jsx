import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFillBookmarkFill } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const LeftHome = () => {
  const user = useSelector((state) => state.user.myProfile);
  return (
    <>
      <Container fluid className="mt-4 p-0">
        <Card>
          <Card.Img
            variant="top"
            src="https://media.licdn.com/dms/image/D4D16AQH_FZDkDj5sow/profile-displaybackgroundimage-shrink_350_1400/0/1670341689480?e=1687392000&v=beta&t=5LSh9omqYGwXGvEo95GlfiwsH12FtnpriAW5rtpPwWM"
            style={{ height: "60px" }}
          />
          <div className="d-flex justify-content-center">
            <img
              className="profilePictureHome"
              src={user.image}
              alt="profile"
            />
          </div>
          <Card.Body className="pt-0 ">
            <Link to="/" style={{ color: "black", textDecoration: "inherit" }}>
              <Card.Title className="text-center m-0 fs-5 fw-bold">
                {user.name} {user.surname}
              </Card.Title>
            </Link>
            <Card.Text className="textSmall text-center text-secondary">
              {user.title}
            </Card.Text>
          </Card.Body>

          <hr
            style={{
              backgroundColor: "black",
              height: "1px",
              border: "none",
              margin: "0",
            }}
          />

          <Card.Body className="hoverElement py-1">
            <Card.Text className="textSmall mb-0 fw-bold d-flex justify-content-between text-secondary">
              Collegamenti
              <span className="text-info ms-2">235</span>
            </Card.Text>
            <p className="Plefthome fw-bold">espandi la tua rete</p>
          </Card.Body>

          <hr
            style={{
              backgroundColor: "black",
              height: "1px",
              border: "none",
              margin: "0",
            }}
          />

          <Card.Body className="hoverElement">
            <Card.Text className="textSmall text-black fw-bold d-flex align-items-center">
              <BsLinkedin className="me-2 text-warning" /> Prova LinkedIn
              Premium
            </Card.Text>
          </Card.Body>
          <hr
            style={{
              backgroundColor: "black",
              height: "1px",
              border: "none",
              margin: "0",
            }}
          />

          <Card.Body className="hoverElement">
            <Card.Text className="textSmall text-black fw-bold d-flex align-items-center">
              <BsFillBookmarkFill className="text-secondary me-2" /> I miei
              elementi
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default LeftHome;

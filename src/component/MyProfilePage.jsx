import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroProfile from "./profileRoute/HeroProfile";
import Information from "./profileRoute/Information";
import Interests from "./profileRoute/Interests";
import StaticComponent from "./profileRoute/StaticComponent";
import Experience from "./profileRoute/Expirience";
import Formation from "./profileRoute/Formation";
import Skills from "./profileRoute/Skills";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  getAllProfile,
  getUserProfile,
  setThisUserID,
} from "../redux/action/UserAction";

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const { userID } = useParams();

  //const thisID = useSelector((state) => state.user.thisProfile.userID);
  const checkUserID = () => {
    if (userID) {
      dispatch(setThisUserID(userID));
    } else {
      dispatch(setThisUserID(null));
    }
    // dispatch(getThisProfile);
    console.log(userID);
  };
  useEffect(() => {
    checkUserID();
    dispatch(getAllProfile);
    dispatch(getUserProfile);
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={8} md={8} lg={12}>
          {/* HERO SECTION */}
          <Row>
            <Col>
              <HeroProfile />
            </Col>
          </Row>
          {/* STATIC COMPONENT SECTION */}
          <Row>
            <Col>
              <StaticComponent />
            </Col>
          </Row>
          {/* INFORMATION SECTION */}
          <Row>
            <Col>
              <Information />
            </Col>
          </Row>
          {/* EXPERIENCE SECTION */}
          <Row>
            <Col>
              <Experience />
            </Col>
          </Row>
          {/* FORMAZIONE */}
          <Row>
            <Col>
              <Formation />
            </Col>
          </Row>
          {/* Skills SECTION */}
          <Row>
            <Col>
              <Skills />
            </Col>
          </Row>
          {/* INTERESTS SECTION */}
          <Row>
            <Col>
              <Interests />
            </Col>
          </Row>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <Row>{/* OTHER PEOPLE */}</Row>
          <Row>{/* SUGGESTED*/}</Row>
          <Row>{/* MY FRIENDs */}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfilePage;

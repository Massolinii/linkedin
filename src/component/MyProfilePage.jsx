import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroProfile from "./profileRoute/HeroProfile";
import Information from "./profileRoute/Information";
import Interests from "./profileRoute/Interests";
import StaticComponent from "./profileRoute/StaticComponent";
import Experience from "./profileRoute/Experience";
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
import SideBarProfile from "./SideBarProfile";

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
    <Container className="d-flex justify-content-center">
      <Row>
        <Col sm={8} md={8} lg={9} xl={9}>
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
        <Col sm={0} md={4} lg={3} xl={3}>
          <Col>
            <SideBarProfile />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfilePage;

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
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getThisProfile,
  resetThisProfile,
  setThisUserID,
} from "../redux/action/UserAction";

const MyProfilePage = () => {
  const { userID } = useParams();
  const dispatch = useDispatch();
  let fetcha = userID ? true : false;
  //se user id e` presente setta l'id e fetcha lutente da mostrare
  //se ci troviamo nella nostra pagine lo resetta
  const checkUserID = () => {
    if (userID) {
      dispatch(setThisUserID(userID));
      dispatch(getThisProfile);
    } else {
      dispatch(resetThisProfile());
    }
  };
  useEffect(() => {
    checkUserID();
  }, [fetcha]);
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

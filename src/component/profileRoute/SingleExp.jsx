import { Row, Col } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import {
  removeExperience,
  setExpID,
} from "../../redux/action/ExperienceAction";
import { useState } from "react";

const SingleExp = ({ exp }) => {
  const dispatch = useDispatch();
  const [IDs, setIDs] = useState([exp.user, exp._id]);
  const handleDeleteExperience = (id) => {
    dispatch(setExpID(id));
    console.log(id);
    if (id[0]) {
      dispatch(removeExperience);
    }
  };
  return (
    <>
      <Row className="d-flex mt-4 p-4 border-bottom border-muted bg-light">
        <Col>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-buildings"
              viewBox="0 0 16 16"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
              <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
            </svg>
          </div>
          {/* <img src="*" alt="LOGO AZIENDA" className="me-2" /> */}
        </Col>
        {/* <Col xs={10}>
          {" "}
          <h5>{exp.company}</h5>
          <p>Start date: {exp.startDate.slice(0, 10)}</p>
          <p>{exp.area}</p>
          <p>
            Competenze: <span>{exp.description}</span>
          </p>
        </Col>  */}
        <Row>
          <Col className="text-center">
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleDeleteExperience(IDs)}
            >
              delete
            </button>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default SingleExp;

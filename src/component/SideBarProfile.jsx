import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const SideBarProfile = () => {
  const otherProfile = useSelector((state) => state.user.otherPeople);
  // console.log(otherProfile.slice(0, 5));
  const [showMore, setShowMore] = useState(false);
  const handleClose = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };

  return (
    <div className="sidebar">
      <div
        className="mb-2 mt-3 p-2 text-secondary rounded bg-white"
        style={{
          fontSize: "0.95em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className="linkAside">
          Modifica il tuo profilo pubblico e l'URL
          <span className="Questionicon ps-2">
            <AiFillQuestionCircle />
          </span>
        </div>

        <hr />

        <div className="linkAside">
          Aggiungi il tuo profilo in un'altra lingua
          <span className="Questionicon ps-2">
            <AiFillQuestionCircle />
          </span>
        </div>
      </div>

      <div
        className="mb-2 p-2 text-secondary rounded bg-white"
        style={{
          fontSize: "0.9em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className="mb-2 p-2 rounded bg-white">
          <div className="otherProfile d-flex justify-content-start text-black mb-3">
            Altri profili consultati
          </div>
          {showMore
            ? otherProfile.map((profile, i) => (
                <div className="d-flex justify-content-start text-secondary mb-3">
                  <img
                    width="20%"
                    height="20%"
                    className="me-1"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt=""
                  />
                  <div>
                    <p className="attivitaAmiciNome m-0">
                      {profile.name} {profile.surname}
                      <span className="gradueSide m-0 text-secondary ">
                        ·{i + 1}°
                      </span>
                    </p>
                    <p className="attivitaAmici m-0">{profile.title}</p>
                    <button className="secondary-button">
                      <BsPersonPlusFill className="button-icon" />
                      Collegati
                    </button>
                  </div>
                </div>
              ))
            : otherProfile.slice(0, 5).map((profile, i) => (
                <div className="d-flex justify-content-start text-secondary mb-3">
                  <img
                    width="20%"
                    height="20%"
                    className="me-1"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt=""
                  />
                  <div>
                    <p className="attivitaAmiciNome m-0">
                      {profile.name} {profile.surname}
                      <span className="gradueSide m-0 text-secondary ">
                        ·{i + 1}°
                      </span>
                    </p>
                    <p className="attivitaAmici m-0">{profile.title}</p>
                    <button className="secondary-button fw-bold">
                      <BsPersonPlusFill className="button-icon" />
                      Collegati
                    </button>
                  </div>
                </div>
              ))}
        </div>

        <p className="Altro  d-flex justify-content-center text-secondary mb-0">
          <Button variant="trasparent" onClick={() => handleClose()}>
            {showMore ? "Visualizza Meno ▲" : "Visualzza Altro ▼"}
          </Button>
        </p>
      </div>

      {/*persone potresi conscere*/}
      <div
        className="mb-2 p-2 text-secondary rounded bg-white"
        style={{
          fontSize: "0.9em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className="mb-2 p-2 rounded bg-white">
          <div className="otherProfile d-flex justify-content-start text-black mb-0">
            Persone che potresti conoscere
          </div>
          <p>Dalla tua scuola o universtà</p>
          <div className="d-flex justify-content-start text-secondary mb-3">
            <img
              width="20%"
              height="20%"
              className="me-1"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <div>
              <p className="attivitaAmiciNome m-0">
                Alessadro Monti{" "}
                <span className="gradueSide m-0 text-secondary ">·2°</span>
              </p>
              <p className="attivitaAmici m-0">Experience Transformation</p>
              <button className="secondary-button ">
                <BsPersonPlusFill className="button-icon" />
                Collegati
              </button>
            </div>
          </div>
        </div>

        <p className="Altro  d-flex justify-content-center text-secondary mb-0">
          Visualzza Altro ▼
        </p>
      </div>
      <div
        className="mb-2 p-2 text-secondary rounded bg-white"
        style={{
          fontSize: "0.9em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className="mb-2 p-2 rounded bg-white">
          <div className="otherProfile d-flex justify-content-start text-black mb-0">
            Potrebbe interessarti
          </div>
          <p>Gruppi per te</p>
          <div className="d-flex justify-content-start text-secondary mb-3">
            <img
              width="20%"
              height="20%"
              className="me-1"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <div>
              <p className="attivitaAmiciNome m-0">
                PMO - Project Management OfficePMO - Project Management Office
              </p>
              <p className="attivitaAmici m-0">utenti 217.548</p>
              <button className="secondary-button">Partecipa</button>
            </div>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-start text-secondary mb-3">
          <img
            width="20%"
            height="20%"
            className="me-1"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div>
            <p className="attivitaAmiciNome m-0">
              PMO - Project Management OfficePMO - Project Management Office
            </p>
            <p className="attivitaAmici m-0">utenti 217.548</p>
            <button className="secondary-button">Partecipa</button>
          </div>
        </div>

        <hr />
        <p className="Altro  d-flex justify-content-center text-secondary mb-0">
          Visualzza Altro ▼
        </p>
      </div>
    </div>
  );
};

export default SideBarProfile;

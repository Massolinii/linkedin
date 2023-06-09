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
                    width={45}
                    height={45}
                    className="me-1 rounded-circle"
                    src={profile.image}
                    alt=""
                  />
                  <div>
                    <p className="attivitaAmiciNome m-0">
                      {profile.name} {profile.surname}
                      <span className="gradueSide m-0 text-secondary ">
                        ·{i + 1}°
                      </span>
                    </p>
                    <p className="attivitaAmici m-0">
                      {profile.title
                        ? profile.title.length < 16
                          ? profile.title
                          : profile.title.substring(0, 16) + "..."
                        : ""}
                    </p>
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
                    width={45}
                    height={45}
                    className="me-1 rounded-circle"
                    src={profile.image}
                    alt=""
                  />
                  <div className="ps-2">
                    <p className="attivitaAmiciNome m-0 ">
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
              width={45}
              height={45}
              className="me-1 rounded-circle"
              src="https://www.iowawild.com/assets/img/TGZ_0168-9301766363.jpg"
              alt=""
            />
            <div className="ps-2">
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
              width={45}
              height={45}
              className="me-1 rounded-circle"
              src="https://static.vecteezy.com/system/resources/previews/009/023/888/non_2x/pmo-logo-pmo-letter-pmo-letter-logo-design-initials-pmo-logo-linked-with-circle-and-uppercase-monogram-logo-pmo-typography-for-technology-business-and-real-estate-brand-vector.jpg"
              alt=""
            />
            <div className="ps-2">
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
            width={45}
            height={45}
            className="me-1 rounded-circle"
            src="https://as2.ftcdn.net/v2/jpg/05/09/87/47/500_F_509874727_6O0NmKoKUBEkDn2UlIZvfDeoK9NtF49e.jpg"
            alt=""
          />
          <div className="ps-2">
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

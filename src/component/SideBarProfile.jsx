import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const SideBarProfile = ({ utenti }) => {
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
        <div className=" linkAside">
          Modifica il tuo profilo pubblico e l'URL
          <span className="ps-2">
            <AiFillQuestionCircle style={{ color: "gray" }} />
          </span>
        </div>

        <hr />

        <div className=" linkAside">
          Aggiungi il tuo profilo in un'altra lingua
          <span className="ps-2">
            <AiFillQuestionCircle style={{ color: "gray" }} />
          </span>
        </div>
      </div>

      <div
        className="mb-2 p-2 text-secondary text-center rounded bg-white"
        style={{
          fontSize: "0.9em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className="mb-2 p-2 rounded bg-white">
          <div
            style={{ fontWeight: "600", fontSize: "1.15em" }}
            className="mb-1"
          >
            Altri profili consultati
          </div>
          <div className="d-flex justify-content-between text-secondary mb-3">
            <img
              width="20%"
              height="20%"
              className="me-1"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <div>
              <p className="attivitaAmiciNome m-0">Alessandro Monti</p>
              <p className="attivitaAmici m-0">Experience Trasformation</p>
              <p className="attivitaAmici m-0">
                <i className="bi bi-vinyl me-2"></i>EP III
              </p>
            </div>
            <p className="attivitaAmiciOre m-0"> &#8226; 2</p>
          </div>
        </div>

        <hr />

        <div className="mb-2 p-2 rounded bg-white">
          <div
            style={{ fontWeight: "600", fontSize: "1.15em" }}
            className="mb-1"
          >
            Aaaaaaaa
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarProfile;

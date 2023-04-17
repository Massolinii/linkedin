import React from "react";
import Hero from "react";
import Image from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroProfile() {
  return (
    <div>
      <Hero
        backgroundImage="url('http://placekitten.com/200/300')"
        title="Il mio profilo"
        subtitle="Sono un professionista di..."
      />
      <div className="profile-info">
        <div className="profile-image">
          <Image
            src="http://placekitten.com/200/300"
            alt="Immagine del profilo"
          />
        </div>
        <h1>Il mio nome</h1>
        <h2>Il mio titolo di lavoro</h2>
        <p>Il mio sito web</p>
      </div>
    </div>
  );
}

export default HeroProfile;

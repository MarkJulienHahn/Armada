import React from "react";

import RunningTitle from "../components/RunningTitle";

import { CrossingImageDino } from "../components/imageComponents/CrossingImageDino";
import Footer from "../components/Footer";

const kontakt = () => {
  return (
    <div className="mainWrapper">

      <CrossingImageDino/>
      <RunningTitle current={"Kontakt"} />
      <div className="kontaktWrapper">
        <div className="kontakt">
          <h2>Armada Theater</h2>
          <p>
            Kuhstraße 31
            <br />
            42555 Velbert
            <br />
            +49 711 – 20 32 0<br />
            <a>info@armada-theater.com</a>
          </p>
        </div>
      </div>
      <div className="kontaktFooter">
        <Footer />
      </div>
    </div>
  );
};

export default kontakt;

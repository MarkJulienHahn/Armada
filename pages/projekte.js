import React from "react";

import RunningTitle from "../components/RunningTitle";

import Image from "next/image";

import image01 from "../public/images/image.jpg";
import image02 from "../public/images/image-1.jpg";
import image03 from "../public/images/image-2.jpg";

const projekte = () => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Projekte"} />

      <div className="projWrapper">
        <div className="projPost">
          <div className="projImageWrapper">
            <Image src={image01} />
          </div>
          <p>DWDW — Die Sache mit dem Wasser</p>
          <p className="fontXS">
            In dieser Performance im Fernsehshow Format erforscht Armada Theater
            dieses faszinierende Element und den menschlichen Umgang mit der
            lebenswichtigen Ressource Wasser. Satirisch, schonungslos und bitter
            böse (…)
          </p>
        </div>
        <div className="projPost">
          <div className="projImageWrapper">
            <Image src={image02} />
          </div>
          <p>DWDW — Die Sache mit den Bäumen</p>
          <p className="fontXS">
            Es ist endlich so weit! Nach der erfolgreichen Sendung „Die Sache
            mit dem Wasser“ geht nun die zweite Folge der Infotainment Show DA
            WAR DOCH WAS live auf Sendung (…)
          </p>
        </div>
        <div className="projPost">
          <div className="projImageWrapper">
            <Image src={image03} />
          </div>
          <p>One World is not Enough</p>
          <p className="fontXS">
            Deutschland hat am 1. Mai 2018 die natürlich verfügbaren Ressourcen
            für jenes Jahr bereits komplett aufgebraucht. Man muss kein
            Mathematikgenie sein, um zu merken, dass das nicht gut gehen wird.
            (…)
          </p>
        </div>
      </div>
    </div>
  );
};

export default projekte;

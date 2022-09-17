import React from "react";

import Image from "next/image";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

import image01 from "../public/images/image-2.jpg";

const aktuelles = () => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Aktuelles"} />

      <div className="aktWrapper">
        <div className="aktPost">
          <p>12 / 10 / 22</p>
          <h2>DWDW 2 — bald geht’s los bald geht’s los</h2>
          <p>
            Bald ist es wieder so weit! Während um sie herum die Wälder brennen,
            bewahren Bobby Kim und ihr Team kühlen Kopf und sind mitten in ihren
            Recherchen für die nächste Show DA
          </p>
          <p className="aktSubline">
            Premiere im Maschinenhaus <br />
            28.Oktober 2022
          </p>
        </div>

        <div className="aktPost">
          <p>10 / 9 / 22</p>
          <h2>Im Land der letzten Dinge</h2>
          <p>
            Trotz geschlossener Theater sind wir aktiv. In der Recherche “Im
            Land der letzten Dinge” untersuchen wir die manigfaltigen Spielorte,
            die sich mit Ton kreiieren lassen. #takeCare
          </p>
          <p className="aktSubline">
            Gefördert vom Fonds Darstellende Künste aus Mitteln der Beauftragten
            der Bundesregierung für Kultur und Medien
          </p>
          <div className="aktImage">
            <Image src={image01} />
          </div>
          <p className="aktSubline">
            Recherche ”Im Land der letzten Dinge“<br/>
            (c) Armada Theater
          </p>
        </div>

        <div className="aktPost">
          <p>12 / 10 / 22</p>
          <h2>DWDW 2 — bald geht’s los bald geht’s los</h2>
          <p>
            Bald ist es wieder so weit! Während um sie herum die Wälder brennen,
            bewahren Bobby Kim und ihr Team kühlen Kopf und sind mitten in ihren
            Recherchen für die nächste Show DA
          </p>
          <p className="aktSubline">
            Premiere im Maschinenhaus <br />
            28.Oktober 2022
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default aktuelles;

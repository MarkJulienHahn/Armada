import React, { useState } from "react";

import Image from "next/image";

import ArmadaPerson from "../components/ArmadaPerson";

const Armada = ({ teammembers, armadaIntro, projekte }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="armdWrapper">
        <div className="armdIntro">
          <h2>Armada Theater</h2>
          <p>{armadaIntro.description}</p>
          <Image
            src={armadaIntro.gruppenbild.url}
            width={armadaIntro.gruppenbild.metadata.dimensions.width}
            height={armadaIntro.gruppenbild.metadata.dimensions.height}
          />
        </div>
        <div className="armdListe">
          {teammembers.map((person, i) => (
            <ArmadaPerson
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              index={i}
              name={person.name}
              text={person.biografie}
              contact={person.email}
              portrait={person.bild}
              projekte={projekte}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Armada;

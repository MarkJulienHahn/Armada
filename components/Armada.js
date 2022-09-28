import React, { useState } from "react";

import ArmadaPerson from "../components/ArmadaPerson";

const Armada = ({ teammembers, armadaIntro }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  console.log(activeIndex);

  return (
    <div>
      <div className="armdWrapper">
        <div className="armdIntro">
          <h2>Armada Theater</h2>
          <p>{armadaIntro}</p>
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
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Armada;

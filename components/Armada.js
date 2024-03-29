import { useState, useEffect } from "react";
import PortableText from "react-portable-text";

import Image from "next/image";


import ArmadaPerson from "../components/ArmadaPerson";

const Armada = ({ teammembers, armadaIntro, projekte, setRunningTitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setRunningTitle("Die Armada");
  }, []);

  console.log(armadaIntro)

  return (
    <>
      <div className="armdWrapper">
        <div className="armdIntro">
          <h2>Armada Theater</h2>
          <PortableText content={armadaIntro.description} />
          {/* <p>{armadaIntro.description}</p> */}
          <Image
            src={armadaIntro.gruppenbild.url}
            width={armadaIntro.gruppenbild.metadata.dimensions.width}
            height={armadaIntro.gruppenbild.metadata.dimensions.height}
          />
        </div>
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
            stuecke={person.stuecke}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Armada;

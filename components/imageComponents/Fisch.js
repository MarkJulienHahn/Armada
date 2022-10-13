import React, { useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import image01 from "../../public/images/Fisch_Sequenz_01.gif";
import image02 from "../../public/images/Fisch_Sequenz_02.gif";

const Fisch = () => {
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playSound = () => {
    setPlaying(true);
  };

  const pauseSound = () => {
    setPlaying(false);
  };

  return (
    <>
      <ReactHowler
        playing={playing}
        loop="true"
        src={[
          !active ? "/sounds/Fischglas_01.mp3" : "",
          active == 1 && "/sounds/Fischglas_02.mp3",
        ]}
      />
      <div className="homePreloader">
        <Image src={image02} width="640" height="360" priority />
      </div>

      <div
        onClick={() => setActive(!active)}
        onMouseEnter={() => playSound()}
        onMouseLeave={() => pauseSound()}
      >
        {!active ? (
          <Image src={image01} />
        ) : (
          <>
            <div>
              <Image src={image02} priority />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Fisch;

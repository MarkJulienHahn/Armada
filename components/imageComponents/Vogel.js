import React, { useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import image01 from "../../public/images/Vogel_Sequenz_01.gif";
import image02 from "../../public/images/Vogel_Sequenz_02.gif";

const Vogel = () => {
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
          !active ? "/sounds/Vogel_01.mp3" : "",
          active == 1 && "/sounds/Vogel_02.mp3",
        ]}
      />
      <div className="homePreloader">
        <Image src={image02} width="640" height="360" priority={true} />
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
              <Image src={image02} width="640" height="360" priority={true} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Vogel;

import React, { useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import image01 from "../../public/images/Jeep_Leerlauf.gif";
import image02 from "../../public/images/Jeep_Fahrt.gif";
import image03 from "../../public/images/Smoke.gif";

const Jeep = () => {
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  const playSound = () => {
    setPlaying(true);
  };

  const pauseSound = () => {
    setPlaying(false);
  };

  const playSound2 = async () => {
    await setPlaying2(true);
  };

  return (
    <>
      <ReactHowler playing={playing} src={["/sounds/Barbie_01.mp3"]} />
      <ReactHowler
        onEnd={() => setPlaying2(false)}
        playing={playing2}
        src={["/sounds/Barbie_02.mp3"]}
      />
      <div className="homePreloader">
        <Image src={image02} width="800" height="600" priority={true} />
      </div>

      <div
        onClick={() => {
          setActive(true), pauseSound(), playSound2();
        }}
      >
        {!active ? (
          <Image
            onMouseEnter={() => playSound()}
            onMouseLeave={() => pauseSound()}
            src={image01}
          />
        ) : (
          <>
            <div className="homeJeepDriving">
              <Image src={image02} width="800" height="600" priority={true} />
            </div>

            <div className="homeSmoke">
              <Image src={image03} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Jeep;

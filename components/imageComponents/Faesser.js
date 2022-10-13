import React, { useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import image01 from "../../public/images/Atommüll_Stufe-00.gif";
import image02 from "../../public/images/Atommüll_Stufe-01.gif";
import image03 from "../../public/images/Atommüll_Stufe-02.gif";
import image04 from "../../public/images/Atommüll_Stufe-03.gif";

const Faesser = () => {
  const [iteration, setIteration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  const playSound = () => {
    setPlaying(true);
  };

  const pauseSound = () => {
    setPlaying(false);
  };

  const playSound2 = async () => {
    setPlaying2(true);
  };

  const addIteration = () => {
    iteration != images.length - 1 ? setIteration(iteration + 1) : () => {};
  };

  const images = [image01, image02, image03, image04];

  return (
    <>
      <ReactHowler
        playing={playing}
        loop="false"
        src={[
          iteration == 0 && "",
          iteration == 1 && "/sounds/atommuell-stufe-01.mp3",
          iteration == 2 && "/sounds/atommuell-stufe-02.mp3",
          iteration == 3 && "",
        ]}
      />
      <ReactHowler
        playing={playing2}
        loop="false"
        src={["/sounds/atommuell-stufe-03.mp3"]}
        onEnd={() => setPlaying2(false)}
      />
      <div className="homePreloader">
        <Image src={image02} width="800" height="600" priority={true} />
        <Image src={image03} width="800" height="600" priority={true} />
        <Image src={image04} width="800" height="600" priority={true} />
      </div>
      <div
        onClick={
          iteration != 2
            ? () => addIteration(true)
            : () => {addIteration(), pauseSound(), playSound2()}
        }
        onMouseEnter={() => playSound()}
        onMouseLeave={() => pauseSound()}
      >
        <Image src={images[iteration]} />
      </div>
    </>
  );
};

export default Faesser;

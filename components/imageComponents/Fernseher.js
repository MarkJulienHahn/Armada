import React, { useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import image01 from "../../public/images/TV_Fuchs.gif";
import image02 from "../../public/images/TV_Logo.gif";
import image03 from "../../public/images/TV_Bobby.gif";
import image04 from "../../public/images/TV_Schlagerfutzi.gif";
import image05 from "../../public/images/TV-Diamantwasserstab.gif";

const Fernseher = () => {
  const [iteration, setIteration] = useState(0);
  const [playing, setPlaying] = useState(false);

  const addIteration = () => {
    iteration != images.length - 1
      ? setIteration(iteration + 1)
      : setIteration(0);
  };

  const images = [image01, image02, image03, image04, image05];

  const playSound = () => {
    setPlaying(true)
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
          iteration == 0 ? "/sounds/TV_Fuchs.mp3" : "",
          iteration == 1 && "/sounds/TV_Logo.mp3",
          iteration == 2 && "/sounds/TV_Barbie.mp3",
          iteration == 3 && "/sounds/TV_Schlagerfutzi.mp3",
          iteration == 4 && "/sounds/TV_Diamantenwasserstab.mp3",
        ]}
      />

      <div className="homePreloader">
        <Image src={image02} width="500" height="430" priority={true} />
      </div>
      <div
        onClick={() => addIteration()}
        onMouseEnter={() => playSound()}
        onMouseLeave={() => pauseSound()}
      >
        <Image
          src={images[iteration]}
          width="500"
          height="430"
          priority={true}
        />
      </div>
    </>
  );
};

export default Fernseher;

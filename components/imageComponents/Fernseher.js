import React, { useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import image01 from "../../public/images/TV_Fuchs.gif";
import image02 from "../../public/images/TV_Logo.gif";
import image03 from "../../public/images/TV_Bobby.gif";
import image04 from "../../public/images/TV_Schlagerfutzi.gif";
import image05 from "../../public/images/TV-Diamantwasserstab.gif";
import image06 from "../../public/images/TV_Logo-2.gif";
import image07 from "../../public/images/TV_Mopspatrol.gif";
import image08 from "../../public/images/TV_Hundekeks.gif";

const Fernseher = () => {
  const [iteration, setIteration] = useState(0);
  const [playing, setPlaying] = useState(false);

  const addIteration = () => {
    iteration != images.length - 1
      ? setIteration(iteration + 1)
      : setIteration(0);
  };

  // Fuchs zuerst, Mopspatrol nach dem ersten Klick, Hundekeks mit Abstand dazu
  const images = [image01, image07, image06, image03, image08, image04, image05, image02];

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
          iteration == 0 ? "/sounds/TV_Fuchs.mp3" : "",
          iteration == 1 && "/sounds/TV_Mopspatrol.mp3",
          iteration == 2 && "/sounds/Hallo-lumina.mp3",
          iteration == 3 && "/sounds/TV_Barbie.mp3",
          iteration == 4 && "/sounds/TV_Hundekeks.mp3",
          iteration == 5 && "/sounds/TV_Schlagerfutzi.mp3",
          iteration == 6 && "/sounds/TV_Diamantenwasserstab.mp3",
          iteration == 7 && "/sounds/TV_Logo.mp3",
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

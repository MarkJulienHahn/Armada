import React, { useState } from "react";

import Image from "next/image";
// import { Howl, Howler } from "howler";

import image01 from "../../public/images/Atommüll_Stufe-00.gif";
import image02 from "../../public/images/Atommüll_Stufe-01.gif";
import image03 from "../../public/images/Atommüll_Stufe-02.gif";
import image04 from "../../public/images/Atommüll_Stufe-03.gif";

// import sound03 from "../../public/sounds/atommuell-stufe-03.mp3";

const Faesser = () => {
  const [iteration, setIteration] = useState(0);

  const addIteration = () => {
    iteration != images.length - 1 ? setIteration(iteration + 1) : () => {};
  };

  const images = [image01, image02, image03, image04];

  // const SoundPlay = () => {
  //   const Sounds = new Howl({
  //     src: [
  //       iteration == 0 && "/sounds/atommuell-stufe-01.mp3",
  //       iteration == 1 && "/sounds/atommuell-stufe-02.mp3",
  //       iteration == 2 && "/sounds/atommuell-stufe-03.mp3",
  //     ],
  //   });
  //   Sounds.play();
  // };

  return (
    <>
      <div className="homePreloader">
        <Image src={image02} width="800" height="600" priority={true} />
        <Image src={image03} width="800" height="600" priority={true} />
        <Image src={image04} width="800" height="600" priority={true} />
      </div>

      <div
        onClick={() => {
          addIteration(true);
          // , SoundPlay();
        }}
      >
        <Image src={images[iteration]} />
      </div>
    </>
  );
};

export default Faesser;

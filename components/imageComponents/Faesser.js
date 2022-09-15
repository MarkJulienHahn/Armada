import React, { useState } from "react";

import Image from "next/image";

import image01 from "../../public/images/Atommüll_Stufe-00.gif";
import image02 from "../../public/images/Atommüll_Stufe-01.gif";
import image03 from "../../public/images/Atommüll_Stufe-02.gif";
import image04 from "../../public/images/Atommüll_Stufe-03.gif";

// import sound01 from "../../public/sounds/atommuell-stufe-01.mp3";
// import sound02 from "../../public/sounds/atommuell-stufe-02.mp3";
// import sound03 from "../../public/sounds/atommuell-stufe-03.mp3";

const Faesser = () => {
  const [iteration, setIteration] = useState(0);

  const addIteration = () => {
    iteration != images.length - 1 ? setIteration(iteration + 1) : () => {};
  };

  const images = [image01, image02, image03, image04];

  // let audio = new Audio(sound01)

  // const start = () => {
  //   audio.play()
  // }

  return (
    <>
      <div className="homePreloader">
        <Image src={image02} width="800" height="600" priority={true} />
        <Image src={image03} width="800" height="600" priority={true} />
        <Image src={image04} width="800" height="600" priority={true} />
      </div>

      <div onClick={() => {addIteration(true)}}>
        <Image src={images[iteration]} />
      </div>
    </>
  );
};

export default Faesser;

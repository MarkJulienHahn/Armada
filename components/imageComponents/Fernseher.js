import React, { useState } from "react";

import Image from "next/image";

import image01 from "../../public/images/TV_Fuchs.gif";
import image02 from "../../public/images/TV_Logo.gif";
import image03 from "../../public/images/TV_Bobby.gif";
import image04 from "../../public/images/TV_Schlagerfutzi.gif";
import image05 from "../../public/images/TV-Diamantwasserstab.gif";

const Fernseher = () => {
  const [iteration, setIteration] = useState(0);

  const addIteration = () => {
    iteration != images.length - 1 ? setIteration(iteration + 1) : setIteration(0);
  };

  const images = [image01, image02, image03, image04, image05];

  return (
    <>
      <div className="homePreloader">
        <Image src={image02} width="500" height="430" priority={true} />
      </div>

      <div onClick={() => addIteration()}>
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

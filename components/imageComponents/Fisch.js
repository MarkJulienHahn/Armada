import React, { useState } from "react";

import Image from "next/image";

import image01 from "../../public/images/Fisch_Sequenz_01.gif";
import image02 from "../../public/images/Fisch_Sequenz_02.gif";

const Fisch = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="homePreloader">
        <Image src={image02} width="640" height="360" priority={true} />
      </div>

      <div onClick={() => setActive(!active)}>
        {!active ? (
          <Image src={image01} />
        ) : (
          <>
            <div>
              <Image src={image02} priority={true} />
            </div> 
            
          </>
        )}
      </div>
    </>
  );
};

export default Fisch;

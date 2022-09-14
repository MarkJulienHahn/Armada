import React, { useState } from "react";

import Image from "next/image";

import image01 from "../../public/images/Jeep_Leerlauf.gif";
import image02 from "../../public/images/Jeep_Fahrt.gif";
import image03 from "../../public/images/Smoke.gif";

const Jeep = () => {
  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(true)}>
      <div style={active ? { display: "none" } : { display: "auto" }}>
        {" "}
        <Image src={image01} />
      </div>

      <div style={!active ? { display: "none" } : { display: "block" }}>
        <div className="homeJeepDriving">
          <Image src={image02} />
        </div>
        <div className="homeSmoke">
          <Image src={image03} />
        </div>
      </div>
    </div>
  );
};

export default Jeep;

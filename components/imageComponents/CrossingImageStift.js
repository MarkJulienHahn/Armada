import React, { useEffect, useState } from "react";

import Image from "next/image";

import stift from "../../public/images/Spielkalender_Stift.gif";

export const CrossingImageStift = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);


  const row3 = {
    position: "fixed",
    bottom: y * 0.01,
    left: x * -0.02,
  };

  return (
    <div className="crossingWrapperStift">
      <div className={"homeImageRow1"} style={row3}>
        <Image src={stift} />
      </div>
    </div>
  );
};

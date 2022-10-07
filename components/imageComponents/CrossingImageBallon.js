import React, { useEffect, useState } from "react";

import Image from "next/image";

import vierJahre from "../../public/images/ab_4_ballon.gif";
import achtJahre from "../../public/images/ab_8_ballon.gif";
import zwoelfJahre from "../../public/images/ab_12_ballon.gif";

export const CrossingImageBallon = ({ ab4, ab8, ab12 }) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [alter, setAlter] = useState(null);
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

  useEffect(() => {
    if (ab4) {
      setAlter(0);
    } else if (ab8) {
      setAlter(1);
    } else if (ab12) {
      setAlter(2);
    } else {
      setAlter(null);
    }
  }, []);

  const row3 = {
    position: "fixed",
    bottom: y * 0.01,
    left: x * -0.02,
  };

  const images = [vierJahre, achtJahre, zwoelfJahre];

  return (
    <div className="crossingWrapperBallon">
      <div className={"homeImageRow1"} style={row3}>
        <Image src={images[alter]} priority />
      </div>
    </div>
  );
};

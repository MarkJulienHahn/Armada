import React, { useEffect, useState } from "react";

import Image from "next/image";
import ReactHowler from "react-howler";

import nilpferd from "../../public/images/Einhorn.gif";

export const CrossingImageNilpferd = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const [playing, setPlaying] = useState(false);

  const pauseSound = () => {
    setPlaying(false);
  };

  const playSound = async () => {
    await setPlaying(true);
  };

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
    <>
      <ReactHowler playing={playing} loop="true" src={["/sounds/Elfe.mp3"]} />
      <div
        className="crossingWrapperNilpferd"
        onMouseEnter={() => playSound()}
        onMouseLeave={() => pauseSound()}
      >
        <div className={"homeImageRow1"} style={row3}>
          <Image src={nilpferd} />
        </div>
      </div>
    </>
  );
};

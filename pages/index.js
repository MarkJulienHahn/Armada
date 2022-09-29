import React, { useState, useEffect } from "react";

import Jeep from "../components/imageComponents/Jeep";
import Faesser from "../components/imageComponents/Faesser";
import Vogel from "../components/imageComponents/Vogel";
import Fernseher from "../components/imageComponents/Fernseher";

import { CrossingImageDino } from "../components/imageComponents/CrossingImageDino";

import Footer from "../components/Footer";

export default function Home() {
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

  const row1 = {
    position: "fixed",
    bottom: y * 0.04,
    left: x * -0.08,
  };

  const row2 = {
    position: "fixed",
    bottom: y * 0.02,
    left: x * -0.05,
  };

  const row3 = {
    position: "fixed",
    bottom: y * 0.01,
    left: x * -0.02,
  };

  const row4 = {
    position: "fixed",
    bottom: y * 0.002,
    left: x * -0.004,
  };

  return (
    <>
      <h2 className={"homeHome"}>Home</h2>

      <CrossingImageDino />

      <div className={"homeImageRow1"} style={row1}>
        <div className={"homeImageJeep"}>
          <Jeep />
        </div>
      </div>

      <div className={"homeImageRow2"} style={row2}>
        <div className={"homeImageFaesser"}>
          <Faesser />
        </div>
      </div>

      <div className={"homeImageRow3"} style={row4}>
        <div className={"homeImageFernseher"}>
          <Fernseher />
        </div>
      </div>

      <div className={"homeImageRow4"} style={row4}>
        <div className={"homeImageVogel"}>
          <Vogel />
        </div>
      </div>

      <div className={"homeLogo"} style={row3}>
        Armada
        <br />
        Theater
      </div>

      <div className={"homeLegals"}>
        <Footer />
      </div>
    </>
  );
}

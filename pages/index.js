import React, { useState, useEffect } from "react";

import Jeep from "../components/imageComponents/Jeep";
import Faesser from "../components/imageComponents/Faesser";
import Vogel from "../components/imageComponents/Vogel";
import Fernseher from "../components/imageComponents/Fernseher";
import Fisch from "../components/imageComponents/Fisch";

import { CrossingImagePapagai } from "../components/imageComponents/CrossingImagePapagai";

import Footer from "../components/Footer";

export default function Home( { setRunningTitle}) {
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

  const [arrayPos, setArrayPos] = useState([0, 1, 2, 3, 4]);

  const row0 = {
    position: "fixed",
    bottom: y * 0.08,
    left: x * -0.15,
  };

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
    bottom: y * 0.005,
    left: x * -0.01,
  };

  const row5 = {
    position: "fixed",
    bottom: y * 0.002,
    left: x * -0.004,
  };

  const imagesArray = [
    <Jeep key={1} />,
    <Faesser key={2} />,
    <Vogel key={3} />,
    <Fernseher key={4} />,
    <Fisch key={5} />,
  ];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const shuffleArray = () => {
    shuffle(arrayPos);
  };

  useEffect(() => {
    shuffleArray(), setRunningTitle(null);
  }, []);

  return (
    <>
      <h2 className={"homeHome"}>Home</h2>

      <CrossingImagePapagai />

      <div className={"homeImageRow0"} style={row0}>
        <div className={"homeImageFisch"}>{imagesArray[arrayPos[0]]}</div>
      </div>

      <div className={"homeImageRow1"} style={row1}>
        <div className={"homeImageJeep"}>{imagesArray[arrayPos[1]]}</div>
      </div>

      <div className={"homeImageRow2"} style={row2}>
        <div className={"homeImageFaesser"}>{imagesArray[arrayPos[2]]}</div>
      </div>

      <div className={"homeImageRow3"} style={row4}>
        <div className={"homeImageFernseher"}>{imagesArray[arrayPos[3]]}</div>
      </div>

      <div className={"homeImageRow4"} style={row5}>
        <div className={"homeImageVogel"}>{imagesArray[arrayPos[4]]}</div>
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

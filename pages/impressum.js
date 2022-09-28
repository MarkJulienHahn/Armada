import React from "react";
import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

const impressum = () => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Impressum"} />
      <p>
        Angaben gemäß § 5 TMG:
        <br />
        <br />
        Clara Gohmert <br />
        Kuhstraße 31
        <br /> 42555 Velbert
        <br /> armada.theater@gmail.com
        <br />
        <br />
        Gestaltung und Programmierung
        <br />
        <a href="https://stereo-typefaces.com" target="_blank">
          Stereo Typefaces
        </a>
        <br />
        <br />
        Schriftarten
        <br />
        Giallo Roman&nbsp; 
        <a href="https://stereo-typefaces.com" target="_blank">
           (Stereo Typefaces)
        </a>
      </p>
      {/* <Footer /> */}
    </div>
  );
};

export default impressum;

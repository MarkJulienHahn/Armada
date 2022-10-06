import { useEffect } from "react";

const Datenschutz = ({ setRunningTitle }) => {
  useEffect(() => {
    setRunningTitle("Datenschutz");
  }, []);

  return (
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
      <a href="https://stereo-typefaces.com" target="_blank" rel="noreferrer">
        Stereo Typefaces
      </a>
      <br />
      <br />
      Schriftarten
      <br />
      Giallo Roman&nbsp;
      <a href="https://stereo-typefaces.com" target="_blank" rel="noreferrer">
        (Stereo Typefaces)
      </a>
    </p>
  );
};

export default Datenschutz;

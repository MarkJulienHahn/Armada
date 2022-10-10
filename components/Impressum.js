import { useEffect } from "react";

const Impressum = ({ setRunningTitle }) => {
  useEffect(() => {
    setRunningTitle("Impressum");
  }, []);

  return (
    <p>
      Angaben gemäß § 5 TMG:
      <br />
      <br />
      ARMADA GbR <br />
      Clara Gohmert <br />
      Kuhstraße 31
      <br /> 42555 Velbert
      <br /> <a href="mailto:info@armada-theater.com">info@armada-theater.com</a>
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

export default Impressum;

import { useEffect } from "react";

import Image from "next/image";

import Logo1 from "../public/images/AK_Kultur_Logo.png";
import Logo2 from "../public/images/LFDK_Logo_4f.jpg";

const Impressum = ({ kontakt, setRunningTitle }) => {
  useEffect(() => {
    setRunningTitle("Impressum");
  }, []);

  return (
    <dig className="imprWrapper">
      <p>
        Angaben gemäß § 5 TMG:
        <br />
        <br />
        ARMADA GbR <br />
        Clara Gohmert <br />
        {kontakt.strasse}
        <br />
        {kontakt.postleitzahl} {kontakt.ort}
        <br />
        <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
        <br />
        <br />
        Gestaltung und Programmierung
        <br />
        <a href="https://stereotypefaces.com" target="_blank" rel="noreferrer">
          Stereo Typefaces
        </a>
        <br />
        <br />
        Schriftarten
        <br />
        Giallo Roman&nbsp;
        <a href="https://stereotypefaces.com" target="_blank" rel="noreferrer">
          (Stereo Typefaces)
        </a>
      </p>
      <div className="imprLogos">
        <p>
          Diese Homepage wurde ermöglicht durch die Förderung Digitale
          Sichtbarkeit vom Ministerium für Kultur und Wissenschaft des Landes
          NRW und dem NRW Landesbüro Freie Darstellende Künste
        </p>
        <div className="projLogos">
          <div className="projLogo">
            <Image
              placeholder="blur"
              blurDataURL="../public/images/image.jpg"
              src={Logo1}
              width={"2214"}
              height={"454"}
            />
          </div>
          <div className="projLogo">
            <Image
              placeholder="blur"
              blurDataURL="../public/images/image.jpg"
              src={Logo2}
              width={"593"}
              height={"340"}
            />
          </div>
        </div>
      </div>
    </dig>
  );
};

export default Impressum;

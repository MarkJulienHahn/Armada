import { useEffect } from "react";

const Kontakt = ({ setRunningTitle }) => {
  useEffect(() => {
    setRunningTitle("Kontakt");
  }, []);
  return (
    <div className="kontaktWrapper">
      <div className="kontakt">
        <h2>Armada Theater</h2>
        <p>
          Kuhstraße 31
          <br />
          42555 Velbert
          <br />
          +49 711 – 20 32 0<br />
          <a>info@armada-theater.com</a>
        </p>
      </div>
    </div>
  );
};

export default Kontakt;

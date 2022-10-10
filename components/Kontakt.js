import { useEffect } from "react";

const Kontakt = ({ setRunningTitle }) => {
  useEffect(() => {
    setRunningTitle("Kontakt");
  }, []);
  return (
    <div className="kontakt">
      <h2>Armada Theater</h2>
      <p>
        Armada GbR <br />
        Kuhstraße 31
        <br />
        42555 Velbert
        <br />
        <a href="mailto:info@armada-theater.com">info@armada-theater.com</a>
      </p>
    </div>
  );
};

export default Kontakt;

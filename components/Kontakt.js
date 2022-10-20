import { useEffect } from "react";

const Kontakt = ({ kontakt, setRunningTitle }) => {

  console.log(kontakt)
  useEffect(() => {
    setRunningTitle("Kontakt");
  }, []);
  return (
    <div className="kontakt">
      <h2>Armada Theater</h2>
      <p>
        Armada GbR <br />
        {kontakt.strasse}
        <br />
        {kontakt.postleitzahl} {kontakt.ort}
        <br />
        <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
      </p>
    </div>
  );
};

export default Kontakt;

import React, { useEffect } from "react";

import { CrossingImageDino } from "../components/imageComponents/CrossingImageDino";
import Kontakt from "../components/Kontakt";
import Footer from "../components/Footer";

const kontakt = ({ setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <CrossingImageDino />
      <Kontakt setRunningTitle={setRunningTitle} />

      <div className="kontaktFooter">
        <Footer />
      </div>
    </div>
  );
};

export default kontakt;

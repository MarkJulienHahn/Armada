import React from "react";

import Impressum from "../components/Impressum";
import Footer from "../components/Footer"

const impressum = ({ setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Impressum setRunningTitle={setRunningTitle} />
      <Footer />
    </div>
  );
};

export default impressum;

import React from "react";

import Impressum from "../components/Impressum";

const impressum = ({ setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Impressum setRunningTitle={setRunningTitle} />
      {/* <Footer /> */}
    </div>
  );
};

export default impressum;

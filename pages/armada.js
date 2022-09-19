import React from "react";

import Armada from "../components/Armada";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

const armada = () => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Die Armada"} />

      <Armada />

      

      <Footer />
    </div>
  );
};

export default armada;

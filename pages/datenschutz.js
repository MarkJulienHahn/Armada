import React from "react";
import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";
import Datenschutz from "../components/Datenschutz";

const datenschutz = ( {setRunningTitle} ) => {
  return (
    <div className="mainWrapper">
      <Datenschutz setRunningTitle={setRunningTitle} />
      {/* <Footer /> */}
    </div>
  );
};

export default datenschutz;

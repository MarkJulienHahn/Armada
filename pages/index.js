import React from "react";

import Jeep from "../components/imageComponents/Jeep"

export default function Home() {
  return (
    <>
      <h2 className={"homeHome"}>Home</h2>
      <div className={"homeImageRow1"}>
        <div className={"homeImageJeep"}>
          <Jeep />
        </div>
      </div>

      <div className={"homeLogo"}>
        Armada
        <br />
        Theater
      </div>
    </>
  );
}

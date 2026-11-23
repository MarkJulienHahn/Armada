import React from "react";

import Image from "../Image";

import wilbi from "../../public/images/Wilbi_Fallschirm.gif";

// Wilbi segelt am Fallschirm von links oben nach rechts unten über die Startseite.
// Das GIF bewegt Schirm, Leinen und Schwanz; Fall und Schwung kommen aus dem CSS.
export const CrossingImageWilbi = () => {
  return (
    <div className="crossingWrapperWilbi">
      <div className="wilbiSchwung">
        <Image src={wilbi} layout="responsive" priority />
      </div>
    </div>
  );
};

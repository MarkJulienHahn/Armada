import React from "react";

import Image from "next/image";

const ProjektPreview = ({ titel, kurzbeschreibung, bild  }) => {

  console.log(titel, bild)

  return (
    <div className="projPost">
      <div className="projImageWrapper">
      <Image placeholder="blur" blurDataURL="../public/images/image.jpg" src={bild.url} layout="responsive" width={bild.metadata.dimensions.width} height={bild.metadata.dimensions.height}/>
      </div>
      <h2>{titel}</h2>
      <p className="fontXS projText">{kurzbeschreibung} (...)</p>
    </div>



  );
};

export default ProjektPreview;

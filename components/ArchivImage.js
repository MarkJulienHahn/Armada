import React from "react";

import Image from "next/image";

const ArchivImage = ({ foto }) => {
  return (
    <>
      <div
        className="archImageInner"
        style={{
          height: "100%",
          position: "relative",
          padding: "0 2px 80px 2px",
        }}
      >
        <Image
          placeholder="blur"
          blurDataURL="../public/images/image.jpg"
          src={foto.foto.url}
          width={foto.foto.metadata?.width}
          height={foto.foto.metadata?.height}
        />
        {foto.bildunterschrift ? (
          <p className="fontXXS">{foto.bildunterschrift}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ArchivImage;

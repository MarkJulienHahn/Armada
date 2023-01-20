import React from "react";

import Image from "next/image";

const AktuellesPost = ({
  titel,
  haupttext,
  subtext,
  bildunterschrift,
  bild,
  datum,
  links,
}) => {

  return (
    <div className="aktPost">
      <p>{datum}</p>
      <h2>{titel}</h2>
      <p>{haupttext}</p>

      {links
        ? links.map((link, i) => (
            <p key={i}>
              <a href={link.link} target="_blank" rel="noreferrer">{link.linkbeschreibung}</a>
            </p>
          ))
        : ""}

      <p className="aktSubline">{subtext}</p>
      {bild?.metadata ? (
        <div
          className={
            bild.metadata.dimensions.aspectRatio < 1
              ? "aktImageHochkant"
              : "aktImageQuerformat"
          }
        >
          {bild ? (
            <Image
              placeholder="blur"
              blurDataURL="../public/images/image.jpg"
              src={bild.url}
              layout="responsive"
              width={bild.metadata.dimensions.width}
              height={bild.metadata.dimensions.height}
            />
          ) : (
            " "
          )}
        </div>
      ) : (
        ""
      )}

      <p className="aktSubline">{bildunterschrift}</p>
    </div>
  );
};

export default AktuellesPost;

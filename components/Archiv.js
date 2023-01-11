import { useState, useEffect } from "react";
import ArchivImage from "../components/ArchivImage";
import Lightbox from "./Lightbox";

const Archiv = ({ archiv, setRunningTitle }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setRunningTitle("Archiv");
  }, []);

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  function compare(a, b) {
    if (formatPrimitive(a.datum) > formatPrimitive(b.datum)) {
      return -1;
    }
    if (formatPrimitive(a.datum) < formatPrimitive(b.datum)) {
      return 1;
    }
    return 0;
  }

  archiv.sort(compare);

  console.log(archiv)

  return (
    <>
      <Lightbox image={image} setImage={setImage} />
      <div className="archWrapper">
        {archiv.map((post, i) => (
          <>
            <div key={i} className="archText">
              <p>{post.datum}</p>
              <p>
                <a href={`/projekte/${post.projekt?.slug}`}>
                  {post.projekt?.titel}
                </a>
              </p>
              <p>{post.titel}</p>

              {post.links
                ? post.links.map((link, i) => (
                    <p key={i}>
                      <a href={link.link} target="_blank" rel="noreferrer">{link.linkbeschreibung}</a>
                    </p>
                  ))
                : ""}
            </div>

            {post.fotos.map((foto, i) => (
              <div key={i} onClick={() => setImage(foto)}>
                <ArchivImage foto={foto} />
              </div>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default Archiv;

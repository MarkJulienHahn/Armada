import React, {useEffect, useState} from "react";

import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

import client from "../client";

import ArchivImage from "../components/ArchivImage";

const archiv = ({ archiv, setRunningTitle }) => {

const [image, setImage] = useState("")

  useEffect(() => {
    setRunningTitle("Archiv")
  },[])

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  function compare(a, b) {
    if (
      formatPrimitive(a.datum) >
      formatPrimitive(b.datum)
    ) {
      return -1;
    }
    if (
      formatPrimitive(a.datum) <
      formatPrimitive(b.datum)
    ) {
      return 1;
    }
    return 0;
  }

  archiv.sort(compare)

  return (
    <div className="mainWrapper">

    <Lightbox image={image} setImage={setImage} />

      <div className="archWrapper">
        {archiv.map((post, i) => (
          <>
            <div key={i} className="archText">
              {console.log(post)}
              <p>{post.datum}</p>
              <p><a href={`/projekte/${post.projekt?.slug}`}>{post.projekt?.titel}</a></p>
              <p>{post.titel}</p>
            </div>

            {post.fotos.map((foto, i) => (
              <div key={i} onClick={() => setImage(foto)}>
                <ArchivImage foto={foto} />
              </div>
            ))}
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default archiv;

export async function getStaticProps(context) {
  const archiv = await client.fetch(`
  *   [_type == "archiv"]
  {  "projekt": projekt->{titel, "slug": slug.current}, 
     "titel": titel,
     "datum": datum,
     "fotos": fotos[]{"foto": foto.asset->{url, "metadata": metadata.dimensions}, "bildunterschrift": bildunterschrift},
  }
  `);
  return {
    props: {
      archiv,
    },
  };
}

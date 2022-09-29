import React from "react";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

import client from "../client";

import Image from "next/image";

const archiv = ({ archiv }) => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Archiv"} />

      <div className="archWrapper">
        {archiv.map((post, i) => (
          <>
            <div key={i} className="archText">
              <p>{post.datum}</p>
              <p>{post.titel}</p>
            </div>

            {post.fotos.map((foto, i) => (
              <div
                key={i}
                style={{
                  height: "100%",
                  position: "relative",
                  padding: "0 2px 80px 2px",
                }}
              >
                <Image
                  key={i}
                  placeholder="blur"
                  blurDataURL="../public/images/image.jpg"
                  src={foto.url}
                  // layout="fill"
                  width={foto.metadata.dimensions.width}
                  height={foto.metadata.dimensions.height}
                  // objectFit="contain"
                />
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

  *   [_type == "archiv"] | order(!datum) 
  {  "titel": titel,
     "datum": datum,
     "fotos": fotos[].asset->
  }
  `);
  return {
    props: {
      archiv,
    },
  };
}

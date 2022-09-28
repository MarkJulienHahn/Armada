import React from "react";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer"

import { fetcher } from "../lib/api";

import Image from "next/image";

const archiv = ({ archiv }) => {
  console.log(archiv);

  return (
    <div className="mainWrapper">
      <RunningTitle current={"Archiv"} />

      <div className="archWrapper">
        {archiv.map((post, i) => (
          <>
            <div className="archText">
              <p>{post.attributes.Datum}</p>
              <p>{post.attributes.Headline}</p>
            </div>

            {post.attributes.Medien.data.map((foto, i) => (

              <div style={{ height: "100%", position: "relative", padding: "0 2px 80px 2px" }}>

                <Image
                    placeholder="blur"
                    blurDataURL="../public/images/image.jpg"
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${foto.attributes.url}`}
                    // layout="fill"
                    width={foto.attributes.width}
                    height={foto.attributes.height}
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

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/archivs?populate=*`
  );
  return {
    props: {
      archiv: response.data,
    },
  };
}

import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Footer from "../components/Footer";

import client from "../client";

const vermittlung = ({ vermittlung, projekte, setRunningTitle }) => {
  function blocksToText(blocks) {
    return blocks.map((block) =>
      block.children.map((child) => child.text).join("")
    );
  }

  useEffect(() => {
    setRunningTitle("Vermittlung");
  }, []);

  return (
    <>
      <div className="mainWrapper">
        <div className="vermWrapper">
          <div className="vermInfo">
            <h2>Vermittlung</h2>
            <p>{blocksToText(vermittlung[0].beschreibung)}</p>
          </div>
        </div>
      </div>

      <div className="vermSwiper">
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={5}
          speed={300}
          loop={true}
          className="mySwiper"
        >
          {vermittlung[0].bilder.map((foto, i) => (
            <SwiperSlide key={i}>
              <div className="vermImage">
                <div style={{ height: "100%", position: "relative" }}>
                  <ProjectSwiperImage foto={foto.data} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mainWrapper">
        <div className="vermInfo">
          <h2>Zum Mitnehmen</h2>
          {projekte.map((projekt, i) => (
            <div className="vermMitnehmenSingle" key={i}>
              <div>
                <p>{projekt.titel}</p>
              </div>
              <div>
                {projekt.downloads?.map((content, i) => (
                  <p key={i}>
                    <a href={content.url.url}>{content.filename}</a>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default vermittlung;

export async function getStaticProps(context) {
  const vermittlung = await client.fetch(`

  *[_type == "vermittlung"]
  {...,  
    "files": files[]{"files": files.asset->{url}, "filename": filename},
    "bilder": bilder[]{"data": asset->{url, "metadata": metadata}}
  }
  `);
  const projekte = await client.fetch(`

  *   [_type == "projekte"] | order(erstauffuehrung) 
  {  "titel": titel,
     "slug": slug.current,
     "downloads": downloads[]{"url": file.asset->{url}, "filename": filename}
  }`);
  return {
    props: {
      vermittlung,
      projekte,
    },
  };
}

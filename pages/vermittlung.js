import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiperSlide, useSwiper } from "swiper/react";

import Image from "next/image";

import RunningTitle from "../components/RunningTitle";
import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Footer from "../components/Footer";

import client from "../client";

const vermittlung = ({ vermittlung, projekte }) => {
  // const swiper = useSwiper();

  function blocksToText(blocks) {
    return blocks.map((block) =>
      block.children.map((child) => child.text).join("")
    );
  }

  console.log(projekte);

  return (
    <>
      <div className="mainWrapper">
        <RunningTitle current={"Vermittlung"} />
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
                  {/* {console.log(foto.attributes.url)} */}
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
          {projekte.map((projekt, i) =>
            projekt.downloads ? (
              <div className="vermMitnehmenSingle" key={i}>
                <div>
                  <p>{projekt.titel}</p>
                </div>
                <div>
                  {projekt.files.map((content, i) => (
                    <p key={i}>
                      <a href={content.files.url}>{content.filename}</a>
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )
          )}
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

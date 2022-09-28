import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiperSlide, useSwiper } from "swiper/react";

import Image from "next/image";

import RunningTitle from "../components/RunningTitle";
import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Footer from "../components/Footer";

import { fetcher } from "../lib/api";

const vermittlung = ({ vermittlung, projekte }) => {
  const swiper = useSwiper();

  return (
    <>
      <div className="mainWrapper">
        <RunningTitle current={"Vermittlung"} />
        <div className="vermWrapper">
          <div className="vermInfo">
            <h2>Vermittlung</h2>
            <p>{vermittlung.attributes.Vermittlungstext}</p>
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
          {vermittlung.attributes.Vermittlungsbilder.data.map((foto, i) => (
            <>
              <SwiperSlide>
                <div className="vermImage">
                  <div style={{ height: "100%", position: "relative" }}>
                    {console.log(foto.attributes.url)}
                    <ProjectSwiperImage foto={foto.attributes} />
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      <div className="mainWrapper">
        <div className="vermInfo">
          <h2>Zum Mitnehmen</h2>
          {projekte.map((projekt) => (
            <div className="vermMitnehmenSingle">
              <div>
                <p>{projekt.attributes.Titel}</p>
              </div>
              <div>
                {projekt.attributes.Downloadcontent.map((content) => (
                  <p>
                    <a>{content.Filename}</a>
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

export async function getStaticProps() {
  const vermittlungResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/vermittlung?populate=*`
  );
  const projekteResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projekte?populate=*`
  );
  return {
    props: {
      vermittlung: vermittlungResponse.data,
      projekte: projekteResponse.data,
    },
  };
}

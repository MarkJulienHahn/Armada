import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Footer from "../components/Footer";

const Vermittlung = ( { vermittlung, projekte, setRunningTitle }) => {
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
      {" "}
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

export default Vermittlung;

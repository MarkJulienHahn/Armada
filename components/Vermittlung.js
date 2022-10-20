import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { PortableText } from "@portabletext/react";

import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Footer from "../components/Footer";

const Vermittlung = ({ vermittlung, projekte, setRunningTitle }) => {
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
            <PortableText value={vermittlung[0].beschreibung} />
          </div>
        </div>
        <div className="vermInfo">
          <h2>Zum Mitnehmen</h2>
          {projekte.map(
            (projekt, i) =>
              projekt.downloads && (
                <div className="vermMitnehmenSingle" key={i}>
                  <div>
                    <p>{projekt.titel}</p>
                  </div>
                  <div>
                    {projekt.downloads?.map((content, i) => (
                      <p key={i}>
                        <a
                          href={content.url.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {content.filename}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              )
          )}
          {vermittlung[0].files?.map((file, i) => (
            <div className="vermMitnehmenSingle" key={i}>
              <div>
                <p>
                  <a href={file.files.url} target="_blank" rel="noreferrer">
                    {file.filename}
                  </a>
                </p>
              </div>
            </div>
          ))}
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
        <Footer />
      </div>
    </>
  );
};

export default Vermittlung;

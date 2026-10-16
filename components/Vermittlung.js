import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { PortableText } from "@portabletext/react";

import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Footer from "../components/Footer";

const formatDatum = (value) =>
  new Date(value).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const formatZeit = (value) =>
  new Date(value).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

const Vermittlung = ({
  vermittlung,
  projekte,
  workshops = [],
  setRunningTitle,
}) => {
  // kommende Workshop-Termine, chronologisch
  const workshopTermine = workshops
    .flatMap((workshop) =>
      (workshop.termine || []).map((termin) => ({ ...termin, workshop }))
    )
    .filter((termin) => new Date(termin.datum) > Date.now())
    .sort((a, b) => new Date(a.datum) - new Date(b.datum));

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
        {workshopTermine.length > 0 && (
          <div className="vermInfo" id="workshops">
            <h2>Workshop-Termine</h2>
            {workshopTermine.map((termin, i) => (
              <div className="vermMitnehmenSingle vermWorkshop" key={i}>
                <div>
                  <p>
                    {formatDatum(termin.datum)}, {formatZeit(termin.datum)} Uhr
                    <br />
                    {termin.spielortlink ? (
                      <a
                        href={termin.spielortlink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {termin.spielort}
                      </a>
                    ) : (
                      termin.spielort
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {termin.workshop.projektSlug ? (
                      <a href={`/projekte/${termin.workshop.projektSlug}`}>
                        {termin.workshop.titel}
                      </a>
                    ) : (
                      termin.workshop.titel
                    )}
                    {termin.workshop.zielgruppe && (
                      <span className="termineWorkshop">
                        <br />
                        {termin.workshop.zielgruppe}
                      </span>
                    )}
                  </p>
                  {termin.workshop.beschreibung && (
                    <p>{termin.workshop.beschreibung}</p>
                  )}
                  {termin.workshop.anmeldelink && (
                    <p>
                      <a
                        href={termin.workshop.anmeldelink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Zur Anmeldung
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
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

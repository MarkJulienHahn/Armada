import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Date from "./Date";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";

const Projekt = ({ projekt }) => {
  console.log("PROJEKT", projekt);

  function blocksToText(blocks) {
    return blocks.map((block) =>
      block.children.map((child) => child.text).join("")
    );
  }

  const beschreibung = blocksToText(projekt.beschreibung);

  return (
    <div className="projSingleWrapper">
      <h1>{projekt.titel}</h1>

      {projekt.videolink ? (
        <div className="embed-container">
          <iframe
            src={projekt.videolink}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        ""
      )}

      <div className="projSingleText">
        <p>{beschreibung}</p>
      </div>

      <div className="projSingleData">
        <div className="projSingleDataWrapper">
          {projekt.termine ? (
            <div className="projSingleDataCol">
              <p>Premiere</p>
              <div>
                {projekt.termine
                  ? projekt.termine.map((termin, i) =>
                      termin.premiere ? (
                        <div key={i}>
                          <Date timestamp={termin.datum} />
                          <p>{termin.spielort}</p>
                        </div>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </div>
            </div>
          ) : (
            ""
          )}
          {projekt.kooperationspartner ? (
            <div className="projSingleDataCol">
              <p>Kooperationspartner</p>
              <div>
                {projekt.kooperationspartner.map((partner, i) => (
                  <p key={i}>{partner}</p>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="projSingleData">
        <p>Beteiligte</p>
        <div className="projSingleDataWrapper">
          {projekt.beteiligte.map((beteiligter, i) => (
            <div className="projSingleDataCol2" key={i}>
              <div>
                <p>{beteiligter.position}</p>

                {beteiligter.member ? (
                  <p>
                    <Link href="/armada">{beteiligter.member.name}</Link>
                  </p>
                ) : (
                  ""
                )}

                <p>{beteiligter.externe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projSingleData">
        <div className="projSingleDataWrapper">
          {projekt.presse ? (
            <div className="projSingleDataCol">
              <p>Presse</p>
              <div>
                {projekt.presse.map((artikel, i) => (
                  <div key={i}>
                    <p>{blocksToText(artikel.text)}</p>
                    {artikel.link ? (
                      <p>
                        <br />
                        <a href={artikel.link} target="_blank" rel="noreferrer">
                          Hier gibt’s mehr zu Lesen.
                        </a>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {projekt.termine ? (
            <div className="projSingleDataCol">
              <p>Spieltermine</p>
              {projekt.termine.map((termin, i) => (
                <div key={i}>
                  <Date timestamp={termin.datum} />
                  <p>{termin.spielort}</p>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          {projekt.downloads ? (
            <div className="projSingleDataCol">
              <p>Zum Mitnehmen</p>

              {projekt.downloads
                ? projekt.downloads.map((content, i) => (
                    <span key={i} className="projDownloadlink">
                      <a href={content.file.url}>
                        <p>{content.filename}</p>
                      </a>
                    </span>
                  ))
                : ""}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="projSwiper">
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={5}
          loop={true}
          speed={300}
          className="mySwiper"
        >
          {projekt.fotos.map((foto, i) => (
            <SwiperSlide key={i}>
              <div className="projImage">
                <ProjectSwiperImage foto={foto.foto} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {projekt.logos ? (
        <div className="projLogos">
          {projekt.logos.map((logo, i) => (
            <div className="projLogo" key={i}>
              <Image
                placeholder="blur"
                blurDataURL="../public/images/image.jpg"
                src={logo.data.url}
                width={logo.data.metadata.dimensions.width}
                height={logo.data.metadata.dimensions.height}
                onClick={() => swiper.slideNext()}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projekt;

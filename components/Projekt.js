import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Date from "./Date";

import Image from "next/image";
import Link from "next/link";

const Projekt = ({ projekt }) => {
  console.log(projekt);

  return (
    <div className="projSingleWrapper">
      <h1>{projekt.attributes.Titel}</h1>

      {projekt.attributes.Videolink ? (
        <div className="embed-container">
          <iframe
            src={projekt.attributes.Videolink}
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
        <p>{projekt.attributes.Beschreibung}</p>
      </div>

      <div className="projSingleData">
        <div className="projSingleDataWrapper">
          {projekt.attributes.Presse ? (
            <div className="projSingleDataCol">
              <p>Premiere</p>
              <div>
                {projekt.attributes.Termine
                  ? projekt.attributes.Termine.map((termin, i) =>
                      termin.Premiere ? (
                        <div key={i}>
                          <Date timestamp={termin.Datum} />
                          <p>{termin.Spielort}</p>
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
          {projekt.attributes.Presse ? (
            <div className="projSingleDataCol">
              <p>Kooperationspartner</p>
              <div>
                {projekt.attributes.Kooperationspartner.map((partner, i) => (
                  <p key={i}>{partner.Repeater}</p>
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
          {projekt.attributes.Beteiligte.map((beteiligte, i) => (
            <div className="projSingleDataCol2" key={i}>
              <div>
                <p>{beteiligte.Rolle}</p>

                {beteiligte.teammembers.data[0] ? (
                  <p>
                    <Link href="/armada">
                      {beteiligte.teammembers.data[0].attributes.Name}
                    </Link>
                  </p>
                ) : (
                  ""
                )}

                <p>{beteiligte.Externe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projSingleData">
        <div className="projSingleDataWrapper">
          {projekt.attributes.Presse ? (
            <div className="projSingleDataCol">
              <p>Presse</p>
              <div>
                <p>{projekt.attributes.Presse.Text}</p>
                {projekt.attributes.Presse.Link ? (
                  <p>
                    <br />
                    <a
                      href={projekt.attributes.Presse.Link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hier gibt’s mehr zu Lesen.
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          {projekt.attributes.Termine ? (
            <div className="projSingleDataCol">
              <p>Spieltermine</p>

              {projekt.attributes.Termine
                ? projekt.attributes.Termine.map((termin, i) => (
                    <div key={i}>
                      <Date key={i} timestamp={termin.Datum} />
                      <p>{termin.Spielort}</p>
                    </div>
                  ))
                : ""}
            </div>
          ) : (
            ""
          )}

          {projekt.attributes.Downloadcontent ? (
            <div className="projSingleDataCol">
              <p>Zum Mitnehmen</p>

              {projekt.attributes.Downloadcontent
                ? projekt.attributes.Downloadcontent.map((content, i) => (
                    <span key={i} className="projDownloadlink">
                      <a
                        href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content.File.data[0].attributes.url}`}
                      >
                        <p>{content.Filename}</p>
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
          {projekt.attributes.Fotos.data.map((foto, i) => (
            <SwiperSlide key={i}>
              <div className="projImage">
                <ProjectSwiperImage foto={foto.attributes} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {projekt.attributes.Logos.data ? (
        <div className="projLogos">
          {projekt.attributes.Logos.data.map((logo, i) => (
            <div className="projLogo" key={i}>
              <Image
                placeholder="blur"
                blurDataURL="../public/images/image.jpg"
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.attributes.url}`}
                width={logo.attributes.width}
                height={logo.attributes.height}
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

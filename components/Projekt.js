import React from "react";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Datum from "./Datum";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";

const Projekt = ({ projekt, links }) => {
  function blocksToText(blocks) {
    return blocks.map((block) =>
      block.children.map((child) => child.text).join("")
    );
  }

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

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
        <div className="projHeaderImage">
          <Image
            placeholder="blur"
            blurDataURL="../public/images/image.jpg"
            src={projekt.vorschaubild.url}
            width={projekt.vorschaubild.metadata.dimensions.width}
            height={projekt.vorschaubild.metadata.dimensions.height}
            onClick={() => swiper.slideNext()}
            layout="responsive"
          />
        </div>
      )}

      <div className="projSingleText">
        <PortableText value={projekt.beschreibung} />
      </div>

      <div className="projSingleDataWrapper">
        <div className="projSingleDataCol">
          <p>Beteiligte</p>
          {projekt.beteiligte?.map((beteiligter, i) => (
            <>
              <div className="projSingleInner">
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
            </>
          ))}

          {projekt.presse ? (
            <>
              <p>Presse</p>
              <div>
                {projekt.presse.map((artikel, i) => (
                  <div className="projSingleInner" key={i}>
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
            </>
          ) : (
            ""
          )}
        </div>

        <div className="projSingleDataCol">
          <p>Termine</p>
          <div>
            {projekt.termine?.map((termin, i) =>
              termin.premiere || formatPrimitive(termin.datum) >= Date.now() ? (
                <div className="projSingleInner" key={i}>
                  <Link href="/termine" rel="noreferrer">
                    <a>
                      <Datum
                        timestamp={termin.datum}
                        premiere={termin.premiere}
                      />
                      <p>{termin.spielort}</p>
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <p>Kooperationspartner*innen und Förderer*innen</p>

          <div className="projSingleDataCol">
            <div>
              {projekt.kooperationspartner?.map((partner, i) => (
                <div className="projSingleInner" key={i}>
                  <p key={i}>{partner}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {projekt.foerderer?.map((foerderer, i) => (
              <div className="projSingleInner" key={i}>
                <p>{foerderer.name}</p>
              </div>
            ))}
          </div>

          {projekt.downloads ? (
            <>
              <p>Zum Mitnehmen</p>

              <div className="projSingleDataCol">
                {projekt.downloads.map((content, i) => (
                  <span key={i} className="projDownloadlink">
                    <a href={content.file.url}>
                      <p>{content.filename}</p>
                    </a>
                  </span>
                ))}
              </div>
            </>
          ) : (
            ""
          )}

          {projekt.videos ? (
            <>
              <p>Videos</p>

              {projekt.videos.map((video, i) => (
                <div key={i} className="projSingleInner">
                  <a href={video.videolink} target="_blank" rel="noreferrer">
                    <p>{video.videotitel}</p>
                  </a>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {projekt.fotos ? (
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
                <p className="projBildunterschrift">{foto.bildunterschrift}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}

      {projekt.foerderer ? (
        <div className="projLogos">
          {projekt.foerderer.map((logo, i) => (
            <div className="projLogo" key={i}>
              <Image
                placeholder="blur"
                blurDataURL="../public/images/image.jpg"
                src={logo.logo.url}
                width={logo.logo.dimensions.width}
                height={logo.logo.dimensions.height}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      <div className="projWeitereProjekte">
        <p className="fontXS">Weitere Projekte</p>
        {links.map((link, i) =>
          link.titel != projekt.titel ? (
            <div key={i}>
              <h2>
                <a href={`/projekte/${link.slug.current}`}> {link.titel}</a>
              </h2>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Projekt;

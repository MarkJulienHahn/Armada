import { useState, useEffect } from "react";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSwiperImage from "../components/ProjectSwiperImage";
import Datum from "./Datum";
import { CrossingImageBallon } from "./imageComponents/CrossingImageBallon";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";

const Projekt = ({
  projekt,
  links,
  setRunningTitle,
  setRunningTitleDouble,
}) => {
  const [value, setValue] = useState();

  const updateValue = () => {
    setValue(value);
  };

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  useEffect(() => {
    setRunningTitle(null), setRunningTitleDouble(projekt.titel);
    return () => {
      setRunningTitleDouble(null);
    };
  }, []);

  useEffect(() => {
    updateValue();
    return () => {
      setValue({});
    };
  }, [value]);

  return (
    <div className="projSingleWrapper">
      <CrossingImageBallon
        ab4={projekt.ab4}
        ab8={projekt.ab8}
        ab12={projekt.ab12}
      />

      <h1>{projekt.titel}</h1>

      {projekt.videolink ? (
        <div className="embed-container">
          <iframe
            src={`https://player.vimeo.com/video/${projekt.videolink}`}
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

                <p>
                  {beteiligter.member ? (
                    <>
                      {beteiligter.member
                        ? beteiligter.member.map((member, i) => (
                            <Link href="/armada" key={i}>
                              <a>
                                {member.name}
                                {i + 1 < beteiligter.member.length ? ", " : " "}
                              </a>
                            </Link>
                          ))
                        : ""}
                    </>
                  ) : (
                    ""
                  )}

                  {beteiligter.externe}
                </p>
              </div>
            </>
          ))}

          {projekt.presse ? (
            <>
              <p>Presse</p>
              <div>
                {projekt.presse.map((artikel, i) => (
                  <div className="projSingleInner formatted" key={i}>
                    <PortableText value={artikel.text} />
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

          <p>Förderer/Förderinnen</p>

          <div>
            {projekt.kooperationspartner?.map((partner, i) => (
              <div className="projSingleInner" key={i}>
                <p key={i}>{partner}</p>
              </div>
            ))}
          </div>

          {/* <div>
            {projekt.foerderer?.map((foerderer, i) => (
              <div className="projSingleInner" key={i}>
                <p>{foerderer.name}</p>
              </div>
            ))}
          </div> */}

          {projekt.aufTour ? (
            <>
              <p>Auf Tour</p>

              <div className="projSingleDataCol">
                {projekt.aufTour.map((content, i) => (
                  <span key={i} className="projSingleInner">
                    <p>
                      {content.location}{" "}
                      {content.link ? (
                        <a href={content.link} target="_blank" rel="noreferrer">
                          Mehr Infos
                        </a>
                      ) : (
                        ""
                      )}
                    </p>
                  </span>
                ))}
              </div>
            </>
          ) : (
            ""
          )}

          {projekt.downloads ? (
            <>
              <p>Zum Mitnehmen</p>

              <div className="projSingleDataCol">
                {projekt.downloads.map((content, i) => (
                  <span key={i} className="projDownloadlink">
                    <a href={content.file.url} target="_blank" rel="noreferrer">
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

      {projekt.downloadsPrivat && projekt.passwort ? (
        <div className="projPasswort">
          <p>Passwortgeschützter Bereich</p>
          {projekt.passwort == value ? (
            <div className="projPasswortCol">
              {projekt.downloadsPrivat.map((content, i) => (
                <span key={i} className="projDownloadlink">
                  {content.file && (
                    <a href={content.file.url} target="_blank" rel="noreferrer">
                      <p>{content.filename}</p>
                    </a>
                  )}

                  {content.image && (
                    <div className="projPasswortImage">
                      <Image
                        placeholder="blur"
                        blurDataURL="../public/images/image.jpg"
                        src={content.image.url}
                        width={content.image.metadata.width}
                        height={content.image.metadata.height}
                      />
                      {content.filename}<br/>
                      <a
                        href={content.image.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Herunterladen (Volle Auflösung)
                      </a>

                    </div>
                  )}

                  {content.videolink && (
                    <div className="projPasswortLink">
                      <a
                        href={content.videolink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>{content.filename}</p>
                      </a>
                    </div>
                  )}
                </span>
              ))}
            </div>
          ) : (
            <div className="projPasswortCol">
              <input
                placeholder="Passwort"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></input>
            </div>
          )}
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

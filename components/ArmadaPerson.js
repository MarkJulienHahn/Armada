import React, { useState, useEffect, useRef } from "react";

import { PortableText } from "@portabletext/react";

import Image from "next/image";

const ArmadaPerson = ({
  setActiveIndex,
  activeIndex,
  index,
  name,
  text,
  contact,
  portrait,
  stuecke,
}) => {
  const [active, setActive] = useState(false);

  const aboutSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const open = () => {
    setActiveIndex(index), 
    setTimeout(scrollDown, 200)
  }

  useEffect(() => {
    index === activeIndex ? setActive(true) : setActive(false);
  }, [activeIndex]);

  return (
    <div ref={aboutSection}>
      <h1
        className="armdHeadline"
        onClick={
          active
            ? () => setActiveIndex(null)
            : () => open()
        }
      >
        {name}
      </h1>
      <div
        className={
          active
            ? "armdPersonWrapper armdPersonWrapperOpen"
            : "armdPersonWrapper armdPersonWrapperClosed"
        }
      >
        {active ? (
          <div onClick={() => setActive(!active)}>
            {portrait ? (
              <div className="armdImageWrapper">
                <div className="armdImage">
                  <Image
                    placeholder="blur"
                    blurDataURL="../public/images/image.jpg"
                    src={portrait.url}
                    layout="responsive"
                    width={portrait.metadata.dimensions.width}
                    height={portrait.metadata.dimensions.height}
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <PortableText value={text} />

            <div className="armdReferenceWrapper">
              <div className="armdReferenceHeader">
                {stuecke ? "Mit der Aramada" : ""}
              </div>
              {stuecke ? (
                <>
                  {stuecke.map((stueck, i) => (
                    <>
                      <h2>
                        <a href={`/projekte/${stueck.slug.current}`}>
                          {stueck.titel}
                        </a>
                      </h2>
                    </>
                  ))}
                </>
              ) : (
                ""
              )}

              <div className="armdReferenceHeader">
                {contact ? "Kontakt" : ""}
              </div>
              <p>
                <a href="">{contact}</a>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ArmadaPerson;

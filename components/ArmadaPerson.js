import React, { useState, useEffect } from "react";

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
  projekte,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    index === activeIndex ? setActive(true) : setActive(false);
  }, [activeIndex]);

  return (
    <div>
      <h1
        className="armdHeadline"
        onClick={
          active ? () => setActiveIndex(null) : () => setActiveIndex(index)
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
              {projekte.beteiligte ? (
                <>
                  {projekte.map((projekt) =>
                    projekt.beteiligte.map((member, i) =>
                      member ? (
                        member.name == name ? (
                          <>
                            <h2>
                              <a href={`/projekte/${projekt.slug.current}`}>
                                {projekt.titel}
                              </a>
                            </h2>
                          </>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )
                    )
                  )}
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

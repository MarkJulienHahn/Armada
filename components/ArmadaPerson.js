import React, { useState, useEffect } from "react";

import Image from "next/image";

const ArmadaPerson = ({
  setActiveIndex,
  activeIndex,
  index,
  name,
  text,
  contact,
  portrait
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
            <div className="armdImageWrapper">
              <div className="armdImage">
                <Image placeholder="blur" blurDataURL="../public/images/image.jpg" src={portrait.url} layout="responsive" width={portrait.metadata.dimensions.width} height={portrait.metadata.dimensions.height}/>
              </div>
            </div>
            <p>{text}</p>
            <h2>
              <a href="">{contact}</a>
            </h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ArmadaPerson;

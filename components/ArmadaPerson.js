import React, { useState, useEffect } from "react";

import Image from "next/image";

import image01 from "../public/images/clara.png";

const ArmadaPerson = ({
  setActiveIndex,
  activeIndex,
  index,
  name,
  text,
  contact,
}) => {
  const [active, setActive] = useState(false);

  console.log(activeIndex, index, active);

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
                <Image src={image01} />
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

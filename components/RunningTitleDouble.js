import React, { useState } from "react";
import Link from "next/link";

const RunningTitleDouble = ({ current }) => {
  const [active, setActive] = useState(false);

  const ToggleActive = () => {
    setActive(!active);
  };

  return (
    <>
      {current ? (
        <div
          className="runningTitleWrapper"
          onMouseEnter={ToggleActive}
          onMouseLeave={ToggleActive}
        >
          <div
            className={
              active
                ? "runningTitleHome runningTitleShownDouble"
                : "runningTitleHome runningTitleHidden"
            }
          >
            <Link href="/" scroll={false}>
              <h2>
                <a>Home&nbsp;&#8592;</a>
              </h2>
            </Link>
            <Link href="/projekte" scroll={false}>
              <h2>
                <a>Projekte&nbsp;&#8592;</a>
              </h2>
            </Link>
          </div>
          <div className="runningTitleCurrent">
            <h2> {current}</h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RunningTitleDouble;

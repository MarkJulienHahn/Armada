import React, { useState, useEffect } from "react";
import Link from "next/link";

const RunningTitleDouble = ({ current }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false)
    return setActive(false);
  }, []);

  return (
    <>
      {current ? (
        <div
          className="runningTitleWrapper"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
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

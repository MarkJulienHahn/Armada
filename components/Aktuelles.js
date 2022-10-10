import { useState, useEffect } from "react";

import Marquee from "react-fast-marquee";

import { Playmobil } from "../components/imageComponents/Playmobil";

import AktuellesPost from "../components/AktuellesPost";

const Aktuelles = ({ aktuelles, aktuellesHighlight, setRunningTitle }) => {
  const [gif, setGif] = useState(false);

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  function compare(a, b) {
    if (
      formatPrimitive(a.veroeffentlichungsdatum) >
      formatPrimitive(b.veroeffentlichungsdatum)
    ) {
      return -1;
    }
    if (
      formatPrimitive(a.veroeffentlichungsdatum) <
      formatPrimitive(b.veroeffentlichungsdatum)
    ) {
      return 1;
    }
    return 0;
  }

  const sorted = aktuelles.sort(compare);

  function formatMyDate(value, locale = "gb-GB") {
    return new Date(value).toLocaleDateString(locale);
  }

  useEffect(() => {
    setRunningTitle("Aktuelles");
  }, []);

  return (
    <div className="aktWrapper">
      <div className={gif ? "playmo playmoActive" : "playmo playmoGone"}>
        <Playmobil />
      </div>

      <div
        className="aktMarqueeWrapper"
        onMouseEnter={() => setGif(true)}
        onMouseLeave={() => setGif(false)}
      >
        <Marquee gradient={false} speed={150}>
          <h2>
            <span style={{ color: "blue" }}> *** Achtung Achtung *** </span>
            Premiere von
            {aktuellesHighlight[0].projekt.termine.map((proj, i) =>
              proj.premiere ? (
                <>
                  <a
                    href={`projekte/${aktuellesHighlight[0].projekt.slug.current}`}
                  >
                    {" "}
                    {aktuellesHighlight[0].projekt.titel}{" "}
                  </a>
                  am&nbsp;
                  {formatMyDate(proj.datum)}. Ort:&nbsp;
                  <a href={proj.spielortlink} target="_blank" rel="noreferrer">
                    {proj.spielort}
                  </a>
                  &nbsp;
                </>
              ) : (
                ""
              )
            )}
          </h2>
        </Marquee>
      </div>
      <div className="aktFeed">
        {sorted.map((post, i) => (
          <AktuellesPost
            key={i}
            titel={post.title}
            haupttext={post.haupttext}
            subtext={post.subtext}
            bildunterschrift={post.bildunterschrift}
            bild={post.bild}
            datum={post.veroeffentlichungsdatum}
          />
        ))}
      </div>
    </div>
  );
};

export default Aktuelles;

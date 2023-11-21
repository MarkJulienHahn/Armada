import { useState, useEffect } from "react";

import Marquee from "react-fast-marquee";
import Link from "next/link";

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
  const heute = new Date().toUTCString();

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
        {aktuellesHighlight[0].meldung && (
          <Marquee
            gradient={false}
            speed={150}
            pauseOnHover={true}
            style={{ cursor: "default" }}
          >
            <h2>
              <span style={{ color: "blue" }}>
                &nbsp;*** Achtung Achtung ***{" "}
              </span>
              {aktuellesHighlight[0].meldung}&nbsp;
              {aktuellesHighlight[0]?.link.externerLink && (
                <a
                  href={aktuellesHighlight[0]?.link.externerLink}
                  target="blank"
                  rel="_noreferrer"
                >
                  {aktuellesHighlight[0]?.link.text}&nbsp;
                </a>
              )}
              {aktuellesHighlight[0]?.link.referenz && (
                <Link
                  href={`/projekte/${aktuellesHighlight[0]?.link.referenz.slug.current}`}
                >
                  {`${aktuellesHighlight[0]?.link.text} `}
                </Link>
              )}
              {aktuellesHighlight[0]?.link.datei && (
                <a href={aktuellesHighlight[0]?.link.datei.asset.url} download>
                  {aktuellesHighlight[0]?.link.text}&nbsp;
                </a>
              )}
            </h2>
          </Marquee>
        )}
      </div>
      <div className="aktFeed">
        {sorted.map(
          (post, i) =>
            post.veroeffentlichungsdatum <= heute && (
              <AktuellesPost
                key={i}
                titel={post.title}
                haupttext={post.haupttext}
                links={post.links}
                subtext={post.subtext}
                bildunterschrift={post.bildunterschrift}
                bild={post.bild}
                datum={post.veroeffentlichungsdatum}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Aktuelles;

import React from "react";

import client from "../client";

import RunningTitle from "../components/RunningTitle";
import AktuellesPost from "../components/AktuellesPost";
import Footer from "../components/Footer";

const aktuelles = ({ aktuelles }) => {
  console.log(aktuelles[0].title, aktuelles);

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

  console.log(aktuelles)

  return (
    <div className="mainWrapper">
      <RunningTitle current={"Aktuelles"} />

      <div className="aktWrapper">
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

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const aktuelles = await client.fetch(`
  *[_type == "aktuelles"]{
    title, "haupttext": haupttext[0].children[0].text, "subtext": subtext[0].children[0].text, bildunterschrift, veroeffentlichungsdatum, "bild": bild.asset->
  }   
  `);
  return {
    props: {
      aktuelles,
    },
  };
}

export default aktuelles;

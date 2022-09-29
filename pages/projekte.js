import React from "react";

import Link from "next/link";
import client from "../client";

import RunningTitle from "../components/RunningTitle";
import ProjektPreview from "../components/ProjektPreview";

const projekte = ({ projekte }) => {

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  function compare(a, b) {
    if (
      formatPrimitive(a.attributes.Erstauffuehrung) >
      formatPrimitive(b.attributes.Erstauffuehrung)
    ) {
      return -1;
    }
    if (
      formatPrimitive(a.attributes.Erstauffuehrung) <
      formatPrimitive(b.attributes.Erstauffuehrung)
    ) {
      return 1;
    }
    return 0;
  }

  const projekteSortiert = projekte.sort(compare);

  return (
    <div className="mainWrapper">
      <RunningTitle current={"Projekte"} />

      <div className="projWrapper">
        {projekte.map((project, i) => (
          <Link key={i} href={`/projekte/${project.slug.current}`}>

            <div className="projLink">
              <ProjektPreview
                titel={project.titel}
                kurzbeschreibung={project.kurzbeschreibung}
                bild={project.vorschaubild}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default projekte;

export async function getStaticProps(context) {
  const projekte = await client.fetch(`

  *   [_type == "projekte"] | order(erstauffuehrung) 
  {  "titel": titel,
     "erstauffuehrung": erstauffuehrung,
     "kurzbeschreibung": kurzbeschreibung,
     "slug": slug,
     "vorschaubild": vorschaubild.asset->{url,metadata},
     "fotos": fotos[].asset->
  }
  `);
  return {
    props: {
      projekte,
    },
  };
}

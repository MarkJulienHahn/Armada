import React from "react";

import Link from "next/link";
import client from "../client";

import RunningTitle from "../components/RunningTitle";
import ProjektPreview from "../components/ProjektPreview";

import { CrossingImagePapagai } from "../components/imageComponents/CrossingImagePapagai";

const projekte = ({ projekte }) => {
  console.log;

  function formatPrimitive(value) {
    return new Date(value)[Symbol.toPrimitive]("number");
  }

  console.log(projekte[0].erstauffuehrung)

  function compare(a, b) {
    if (
      formatPrimitive(a.erstauffuehrung) >
      formatPrimitive(b.erstauffuehrung)
    ) {
      return -1;
    }
    if (
      formatPrimitive(a.erstauffuehrung) <
      formatPrimitive(b.erstauffuehrung)
    ) {
      return 1;
    }
    return 0;
  }

  const projekteSortiert = projekte.sort(compare);

  return (
    <div className="mainWrapper">
      <RunningTitle current={"Projekte"} />

      <CrossingImagePapagai />

      <div className="projWrapper">
        {projekteSortiert.map((project, i) =>
          project.slug.current ? (
            <Link key={i} href={`/projekte/${project.slug.current}`}>
              <div className="projLink">
                <ProjektPreview
                  titel={project.titel}
                  kurzbeschreibung={project.kurzbeschreibung}
                  bild={project.vorschaubild}
                />
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default projekte;

export async function getStaticProps(context) {
  const projekte = await client.fetch(`

  *   [_type == "projekte"] | order(!erstauffuehrung) 
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

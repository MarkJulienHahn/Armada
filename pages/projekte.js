import React from "react";

import Link from "next/link";

import client from "../client";

import RunningTitle from "../components/RunningTitle";
import ProjektPreview from "../components/ProjektPreview";

import useSWR from "swr";

import { fetcher } from "../lib/api";

const projekte = ({ projekte }) => {
  // const { data } = useSWR(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projekte?populate=*`,
  //   fetcher,
  //   {
  //     fallbackData: projekte,
  //   }
  // );

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
          <Link href={`/projekte/${project.slug}`}>
            <div className="projLink">
              <ProjektPreview
                key={i}
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

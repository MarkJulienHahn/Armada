import React, { useEffect } from "react";

import Link from "next/link";
import client from "../client";

import Footer from "../components/Footer";
import ProjektOverview from "../components/ProjektOverview";

const projekte = ({ projekte, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <ProjektOverview projekte={projekte} setRunningTitle={setRunningTitle} />

      <Footer />
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
     "fotos": fotos[].asset->,
  }
  `);

  return {
    props: {
      projekte,
    },
  };
}

import React from "react";

import Head from "next/head";

import client from "../client";

import Footer from "../components/Footer";
import ProjektOverview from "../components/ProjektOverview";
import { CrossingImageFisch } from "../components/imageComponents/CrossingImageFisch";

const projekte = ({ projekte, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Projekte</title>
        <meta name="keywords" content="web" />
      </Head>
      <CrossingImageFisch />
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
    revalidate: 10,
  };
}

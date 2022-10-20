import Head from "next/head";

import React from "react";

import client from "../client";

import { CrossingImageDino } from "../components/imageComponents/CrossingImageDino";
import Kontakt from "../components/Kontakt";
import Footer from "../components/Footer";

const kontakt = ({ kontakt, setRunningTitle }) => {
  return (
    <div className="kontaktWrapper">
      <Head>
        <title>Armada Theater | Kontakt</title>
        <meta name="keywords" content="web" />
      </Head>
      <CrossingImageDino />
      <Kontakt kontakt={kontakt[0]} setRunningTitle={setRunningTitle} />

      <div className="kontaktFooter">
        <Footer />
      </div>
    </div>
  );
};

export default kontakt;

export async function getStaticProps() {
  const kontakt = await client.fetch(`
  *   [_type == "kontakt"]{...}`);
  return {
    props: {
      kontakt,
    },
    revalidate: 10,
  };
}


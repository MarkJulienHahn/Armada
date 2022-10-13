import Head from "next/head";

import React from "react";

import { CrossingImageDino } from "../components/imageComponents/CrossingImageDino";
import Kontakt from "../components/Kontakt";
import Footer from "../components/Footer";

const kontakt = ({ setRunningTitle }) => {
  return (
    <div className="kontaktWrapper">
      <Head>
        <title>Armada Theater | Kontakt</title>
        <meta name="keywords" content="web" />
      </Head>
      <CrossingImageDino />
      <Kontakt setRunningTitle={setRunningTitle} />

      <div className="kontaktFooter">
        <Footer />
      </div>
    </div>
  );
};

export default kontakt;

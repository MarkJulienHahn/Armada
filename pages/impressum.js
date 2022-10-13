import Head from "next/head";

import React from "react";

import Impressum from "../components/Impressum";
import Footer from "../components/Footer";

const impressum = ({ setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Impressum</title>
        <meta name="keywords" content="web" />
      </Head>
      <Impressum setRunningTitle={setRunningTitle} />
      <Footer />
    </div>
  );
};

export default impressum;

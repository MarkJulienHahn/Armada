import React from "react";
import client from "../client";
import Datenschutz from "../components/Datenschutz";

import Footer from "../components/Footer"

const datenschutz = ( {setRunningTitle, datenschutz} ) => {
  return (
    <div className="mainWrapper">
      <Datenschutz setRunningTitle={setRunningTitle} datenschutz={datenschutz[0]}/>
      <Footer />
    </div>
  );
};

export default datenschutz;

export async function getStaticProps() {
  const datenschutz = await client.fetch(`
  *   [_type == "datenschutz"]{...}
  `);
  return {
    props: {
      datenschutz,
    },
  };
}

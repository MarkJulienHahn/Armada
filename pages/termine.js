import React from "react";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

import client from "../client";
import Termine from "../components/Termine";

const termine = ({ projekte }) => {

  console.log(projekte)
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Termine"} />

      <Termine projekte={projekte} />
      <Footer />
    </div>
  );
};

export default termine;


export async function getStaticProps(context) {
  const projekte = await client.fetch(`

  *   [_type == "projekte"]
  {  "titel": titel,
    "termine": termine
  }
  `);
  return {
    props: {
      projekte,
    },
  };
}

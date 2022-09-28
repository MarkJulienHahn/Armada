import React from "react";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

import { fetcher } from "../lib/api";
import Termine from "../components/Termine";

const termine = ({ projekte }) => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Termine"} />

      <Termine projekte={projekte} />
      <Footer />
    </div>
  );
};

export default termine;

export async function getStaticProps() {
  const projekteResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projekte?populate=*`
  );
  return {
    props: {
      projekte: projekteResponse.data,
    },
  };
}

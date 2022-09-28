import React from "react";

import RunningTitleDouble from "../../components/RunningTitleDouble";
import Projekt from "../../components/Projekt";

import "swiper/css";

import { fetcher } from "../../lib/api";
import Footer from "../../components/Footer";

const projekt = ({ projekt }) => {
  console.log("hier:", projekt);

  return (
    <>
      <div className="mainWrapper">
        <RunningTitleDouble current={projekt[0].attributes.Titel} />

        <Projekt projekt={projekt[0]} />
        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const projektResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projekte?filters\[Slug\][$eq]=${slug}&populate=*`
  );
  return {
    props: {
      projekt: projektResponse.data,
    },
  };
}

export default projekt;

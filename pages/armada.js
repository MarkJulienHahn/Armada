import React from "react";

import client from "../client";


import Armada from "../components/Armada";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";


const armada = ({ teammembers, armadaIntro }) => {

  console.log(teammembers)
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Die Armada"} />

      <Armada
        teammembers={teammembers}
        // armadaIntro={armadaIntro.data.attributes.Introtext}
      />

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const teammembers = await client.fetch(`
  *[_type == "dieArmada"]{
    name, "biografie": biografie[0].children[0].text, "bild": bild.asset->, email
  }  
  `);
  return {
    props: {
      teammembers,
    },
  };
}

export default armada;

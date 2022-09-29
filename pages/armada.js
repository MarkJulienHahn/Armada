import React from "react";

import client from "../client";

import Armada from "../components/Armada";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

const armada = ({ teammembers, armadaIntro }) => {
  console.log(armadaIntro);
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Die Armada"} />

      <Armada
        teammembers={teammembers}
        armadaIntro={armadaIntro[0]}
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

  const armadaIntro = await client.fetch(`
  *[_type == "armadaIntro"]
  {..., "gruppenbild": gruppenbild.asset->{metadata, url}}`);
  return {
    props: {
      teammembers, armadaIntro
    }
  };
}

export default armada;

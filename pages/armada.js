import React from "react";

import client from "../client";

import Armada from "../components/Armada";

import RunningTitle from "../components/RunningTitle";
import Footer from "../components/Footer";

const armada = ({ teammembers, armadaIntro, projekte }) => {
  return (
    <div className="mainWrapper">
      <RunningTitle current={"Die Armada"} />

      <Armada
        teammembers={teammembers}
        armadaIntro={armadaIntro[0]}
        projekte={projekte}
      />

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const teammembers = await client.fetch(`
  *[_type == "dieArmada"]{
    name, "biografie": biografie[0].children[0].text, "bild": bild.asset->, email
  }  
  `);
  const armadaIntro = await client.fetch(`
  *[_type == "armadaIntro"]
  {..., "gruppenbild": gruppenbild.asset->{metadata, url}}`);

  const projekte = await client.fetch(`
  *[_type == "projekte"]
  {titel, slug, "image": vorschaubild.asset->{url, "metadata": metadata.dimensions}, "beteiligte": beteiligte[].member->}`);
  return {
    props: {
      teammembers, armadaIntro, projekte
    }
  };
}

export default armada;

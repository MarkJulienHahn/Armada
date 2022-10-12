import client from "../client";

import Armada from "../components/Armada";
import Footer from "../components/Footer";
import { CrossingImageNilpferd } from "../components/imageComponents/CrossingImageNilpferd";

const armada = ({ teammembers, armadaIntro, projekte, setRunningTitle }) => {
  console.log(teammembers)
  return (
    <div className="mainWrapper">
      <CrossingImageNilpferd />
      <Armada
        teammembers={teammembers}
        armadaIntro={armadaIntro[0]}
        projekte={projekte}
        setRunningTitle={setRunningTitle}
      />

      <Footer />
    </div>
  );
};



export async function getStaticProps() {
  const teammembers = await client.fetch(`
  *[_type == "dieArmada"] | order(order asc) {...,
    name, "biografie": biografie, "bild": bild.asset->, email, "stuecke": stuecke[]->{"titel": titel, "slug": slug}
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
      teammembers,
      armadaIntro,
      projekte,
    },
  };
}

export default armada;

import client from "../client";

import Footer from "../components/Footer";
import Aktuelles from "../components/Aktuelles";

const aktuelles = ({ aktuelles, aktuellesHighlight, setRunningTitle }) => {


  return (
    <div className="mainWrapper">


      <Aktuelles
        aktuelles={aktuelles}
        aktuellesHighlight={aktuellesHighlight}
        setRunningTitle={setRunningTitle}
      />

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const aktuelles = await client.fetch(`
  *[_type == "aktuelles"]{
    title, "haupttext": haupttext[0].children[0].text, "subtext": subtext[0].children[0].text, bildunterschrift, veroeffentlichungsdatum, "bild": bild.asset->
  }   
  `);
  const aktuellesHighlight = await client.fetch(`
  *[_type == "aktuellesHighlight"]{..., "projekt": projekt->{"slug": slug, "titel": titel, "termine": termine}}
  `);
  return {
    props: {
      aktuelles,
      aktuellesHighlight,
    },
  };
}

export default aktuelles;

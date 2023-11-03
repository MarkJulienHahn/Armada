import Head from "next/head";

import client from "../client";

import Footer from "../components/Footer";
import Aktuelles from "../components/Aktuelles";

const aktuelles = ({ aktuelles, aktuellesHighlight, setRunningTitle }) => {

  console.log(aktuelles)

  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Aktuelles</title>
        <meta name="keywords" content="web" />
      </Head>

      <Aktuelles
        aktuelles={aktuelles}
        aktuellesHighlight={aktuellesHighlight}
        setRunningTitle={setRunningTitle}
      />

      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const aktuelles = await client.fetch(`
  *[_type == "aktuelles"]| order((veroeffentlichungsdatum) asc){
    title, "haupttext": haupttext[0].children[0].text, links, "subtext": subtext[0].children[0].text, bildunterschrift, veroeffentlichungsdatum, "bild": bild.asset->
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

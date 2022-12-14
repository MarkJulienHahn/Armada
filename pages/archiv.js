import Head from "next/head";

import Footer from "../components/Footer";
import client from "../client";
import Archiv from "../components/Archiv";
import { CrossingImageSturm } from "../components/imageComponents/CrossingImageSturm";

const archiv = ({ archiv, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Archiv</title>
        <meta name="keywords" content="web" />
      </Head>
      <CrossingImageSturm />
      <Archiv archiv={archiv} setRunningTitle={setRunningTitle} />
      <Footer />
    </div>
  );
};

export default archiv;

export async function getServerSideProps(context) {
  const archiv = await client.fetch(`
  *   [_type == "archiv"]
  {  "projekt": projekt->{titel, "slug": slug.current}, 
     "titel": titel,
     links,
     "datum": datum,
     "fotos": fotos[]{"foto": foto.asset->{url, "metadata": metadata.dimensions}, "bildunterschrift": bildunterschrift},
  }
  `);
  return {
    props: {
      archiv,
    },
  };
}

import Footer from "../components/Footer";
import client from "../client";
import Archiv from "../components/Archiv";

const archiv = ({ archiv, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Archiv archiv={archiv} setRunningTitle={setRunningTitle} />
      <Footer />
    </div>
  );
};

export default archiv;

export async function getStaticProps(context) {
  const archiv = await client.fetch(`
  *   [_type == "archiv"]
  {  "projekt": projekt->{titel, "slug": slug.current}, 
     "titel": titel,
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

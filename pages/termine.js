import Head from "next/head";

import Footer from "../components/Footer";

import client from "../client";
import Termine from "../components/Termine";

const termine = ({ projekte, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Termine</title>
        <meta name="keywords" content="web" />
      </Head>
      <Termine projekte={projekte} setRunningTitle={setRunningTitle} />
      <Footer />
    </div>
  );
};

export default termine;

export async function getStaticProps(context) {
  const projekte = await client.fetch(`

  *   [_type == "projekte"]
  {  "titel": titel,
    "termine": termine,
    "slug": slug
  }
  `);
  return {
    props: {
      projekte,
    },
  };
}

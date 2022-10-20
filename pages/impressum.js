import Head from "next/head";

import client from "../client";

import Impressum from "../components/Impressum";
import Footer from "../components/Footer";

const impressum = ({ kontakt, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Impressum</title>
        <meta name="keywords" content="web" />
      </Head>
      <Impressum kontakt={kontakt[0]} setRunningTitle={setRunningTitle} />
      <Footer />
    </div>
  );
};

export default impressum;

export async function getStaticProps() {
  const kontakt = await client.fetch(`
  *   [_type == "kontakt"]{...}`);
  return {
    props: {
      kontakt,
    },
    revalidate: 10,
  };
}
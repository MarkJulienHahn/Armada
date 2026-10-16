import Head from "next/head";

import Footer from "../components/Footer";

import client from "../client";
import Termine from "../components/Termine";

const termine = ({ projekte, workshops, setRunningTitle }) => {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Armada Theater | Termine</title>
        <meta name="keywords" content="web" />
      </Head>
      <Termine
        projekte={projekte}
        workshops={workshops}
        setRunningTitle={setRunningTitle}
      />
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
  const workshops = await client.fetch(`

  *   [_type == "workshop"]
  {  "titel": titel,
     "zielgruppe": zielgruppe,
     "anmeldelink": anmeldelink,
     "termine": termine,
     "projektSlug": projekt->slug.current
  }
  `);
  return {
    props: {
      projekte,
      workshops,
    },
    revalidate: 10,
  };
}

import Head from "next/head";

import Vermittlung from "../components/Vermittlung";
import client from "../client";
import { CrossingImageCan } from "../components/imageComponents/CrossingImageCan";

const vermittlung = ({ vermittlung, projekte, workshops, setRunningTitle }) => {
  return (
    <>
      <Head>
        <title>Armada Theater | Vermittlung</title>
        <meta name="keywords" content="web" />
      </Head>
      <CrossingImageCan />
      <Vermittlung
        vermittlung={vermittlung}
        projekte={projekte}
        workshops={workshops}
        setRunningTitle={setRunningTitle}
      />
    </>
  );
};

export default vermittlung;

export async function getStaticProps(context) {
  const vermittlung = await client.fetch(`

  *[_type == "vermittlung"]
  {...,  
    "files": files[]{"files": files.asset->{url}, "filename": filename},
    "bilder": bilder[]{"data": asset->{url, "metadata": metadata}}
  }
  `);
  const projekte = await client.fetch(`

  *   [_type == "projekte"] | order(erstauffuehrung) 
  {  "titel": titel,
     "slug": slug.current,
     "downloads": downloads[]{"url": file.asset->{url}, "filename": filename}
  }`);
  const workshops = await client.fetch(`

  *   [_type == "workshop"]
  {  "titel": titel,
     "beschreibung": beschreibung,
     "zielgruppe": zielgruppe,
     "anmeldelink": anmeldelink,
     "termine": termine,
     "projektSlug": projekt->slug.current
  }`);
  return {
    props: {
      vermittlung,
      projekte,
      workshops,
    },
    revalidate: 60,
  };
  
}

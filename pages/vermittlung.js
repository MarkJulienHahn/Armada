import Vermittlung from "../components/Vermittlung";
import client from "../client";

const vermittlung = ({ vermittlung, projekte, setRunningTitle }) => {
  return (
    <>
      <Vermittlung
        vermittlung={vermittlung}
        projekte={projekte}
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
  return {
    props: {
      vermittlung,
      projekte,
    },
  };
}

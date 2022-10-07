import Projekt from "../../components/Projekt";
import client from "../../client";
import Footer from "../../components/Footer";

export async function getStaticPaths() {
  const res = await client.fetch(`*[_type == "projekte"]`);
  const data = await res;

  const paths = data.map((projekt) => {
    return { params: { slug: projekt.slug.current.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const projekte = await client.fetch(`

  *[slug.current == "${slug}"]
  {..., 
    "beteiligte": beteiligte[]{"position": position, "member": beteiligte[]->{name}, "externe": externe}, 
    "downloads": downloads[]{"filename": filename, "file": file.asset->{url}},
    "fotos": fotos[]{"foto": foto.asset->{url, "metadata": metadata.dimensions}, "bildunterschrift": bildunterschrift},
    "vorschaubild": vorschaubild.asset->{url,metadata},
    "logos": logos[]{"data": asset->{url, metadata}},
    "foerderer": foerderer[]{"logo": logo.asset->{url, "dimensions": metadata.dimensions}, "name": foerderer },
  }
  `);

  const links = await client.fetch(`  *[_type == "projekte"]  {
    titel, slug, erstauffuehrung
      }`);

  return {
    props: {
      projekte,
      links,
    },
  };
}

const projektSingle = ({
  projekte,
  links,
  setRunningTitle,
  setRunningTitleDouble,
}) => {
  return (
    <>
      <div className="mainWrapper">
        <Projekt
          projekt={projekte[0]}
          links={links}
          setRunningTitle={setRunningTitle}
          setRunningTitleDouble={setRunningTitleDouble}
        />
        <Footer />
      </div>
    </>
  );
};

export default projektSingle;
